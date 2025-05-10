import { useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import CircularIndeterminate from './Loading';

export const TrackList = () => {
    const {similarTracks, loading, hasSearched, searchType} = useContext(SearchContext);

    if (loading) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <CircularIndeterminate />
          </div>
        );
      }

      if (hasSearched && similarTracks.length === 0) {
        return (
          <p style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}>
            Nenhuma música encontrada.
          </p>
        );
      }
    
      if (!hasSearched) return null;
      if (searchType !== 'track') return null;

      return (
        <div style={{ fontFamily: 'Orbitron, sans-serif', padding: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            Achamos que você pode gostar de:
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {similarTracks.map((track) => {
              const imageUrl =
                track.image?.[3]?.['#text']?.trim() ||
                track.image?.[2]?.['#text']?.trim() ||
                'https://via.placeholder.com/150';
    
              return (
                <div key={track.name + track.artist.name} style={{ textAlign: 'center', maxWidth: 160 }}>
                  <img
                    src={imageUrl}
                    alt={track.name}
                    style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <p style={{ margin: '10px 0 5px' }}><strong>{track.name}</strong></p>
                  <p style={{ color: '#555' }}>{track.artist.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
}