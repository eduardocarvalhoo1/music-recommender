import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import CircularIndeterminate from './Loading';

export const ArtistsList = () => {
  const { similarArtists, loading } = useContext(SearchContext);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularIndeterminate />
      </div>
    );
  }

  if (similarArtists.length === 0) {
    return (
      <p style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}>
        Nenhum artista encontrado.
      </p>
    );
  }

  return (
    <div style={{ fontFamily: 'Orbitron, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Achamos que você pode gostar de:
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
      }}>
        {similarArtists.map((artist) => {
          const imageUrl =
            artist.image?.[4]['#text']?.trim() ||
            artist.image?.[3]['#text']?.trim() ||
            artist.image?.[2]['#text']?.trim() ||
            'https://via.placeholder.com/150';
          
          console.log('URL da imagem ', imageUrl)
          return (
            <div key={artist.name} style={{ textAlign: 'center', width: 160 }}>
              <img
                src={imageUrl}
                alt={artist.name}
                style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '8px' }}
              />
              <p style={{ marginTop: '10px' }}>{artist.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
