import { children, createContext, useState } from 'react';

export const SearchContext = createContext();

const API_KEY = ''; // ***Insira a chave da API aqui***

export const SearchProvider = ({children}) => {
    const [similarArtists, setSimilarArtists] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSimilarArtists = async (artistName) => {
        console.log('Buscando por:', artistName);
        setLoading(true);
        
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
                console.warn('Nenhum artista similar encontrado.')
            }
        } catch (error) {
            console.log('Erro na requisição', error);
        }

        setLoading(false);

    }

    return (
        <SearchContext.Provider value={{similarArtists, loading, fetchSimilarArtists}}>
            {children}
        </SearchContext.Provider>
    )
}
