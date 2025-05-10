import { children, createContext, useState } from 'react';

export const SearchContext = createContext();

const API_KEY = '70ac338966f486ecf83b198e2c0b6dcd'; // ***Insira a chave da API aqui***

export const SearchProvider = ({children}) => {
    const [similarArtists, setSimilarArtists] = useState([]);
    const [similarTracks, setSimilarTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [searchType, setSearchType] = useState(null); // **

    const fetchSimilarArtists = async (artistName) => {
        console.log('Buscando por:', artistName);
        setHasSearched(true);
        setLoading(true);
        setSearchType('artist');
        setSimilarArtists([]);
        
        try {
            const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${encodeURIComponent(artistName)}&api_key=${API_KEY}&format=json`);
            const data = await res.json();
            
            if (data?.similarartists.artist) {
                const top5 = data.similarartists.artist.slice(0, 5);
                setSimilarArtists(top5);
                console.log('Resultados encontrados:', top5);
            }
            else {
                setSimilarArtists([]);
            }
        } catch (error) {
            console.log('Erro na requisição', error);
        }

        setLoading(false);

    }

    const fetchSimilarTracks = async (trackName, artistName) => {
        setHasSearched(true);
        setSimilarArtists([]);
        setLoading(true);
        setSearchType('track');
        setSimilarTracks([])
      
        try {
          const res = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${encodeURIComponent(artistName)}&track=${encodeURIComponent(trackName)}&api_key=${API_KEY}&format=json`
          );
          const data = await res.json();
      
          if (data?.similartracks?.track) {
            const top5 = data.similartracks.track.slice(0, 5);
            setSimilarTracks(top5);
            console.log('Resultados encontrados:', top5);
          } else {
            setSimilarTracks([]);
            console.warn('Nenhuma música similar encontrada');
          }
        } catch (error) {
          console.log('Erro na requisição', error);
        }
      
        setLoading(false);
      };      

    return (
        <SearchContext.Provider value={{similarArtists, loading, fetchSimilarArtists, hasSearched, similarTracks, fetchSimilarTracks, searchType}}>
            {children}
        </SearchContext.Provider>
    )
}
