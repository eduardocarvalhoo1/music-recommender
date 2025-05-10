/*import { ArtistsList } from './components/ArtistList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { SearchProvider } from './contexts/SearchContext';
import { TrackList } from './components/TrackList';

function App() {
  return (
    <>
      <SearchProvider>
        <Title />
        <SearchBar />
        <ArtistsList />
        <TrackList />
      </SearchProvider>
    </>
  );
}*/

import { useContext } from 'react';
import { ArtistsList } from './components/ArtistList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { SearchProvider, SearchContext } from './contexts/SearchContext';
import { TrackList } from './components/TrackList';

function Content() {
  const { searchType } = useContext(SearchContext);

  return (
    <>
      {searchType === 'artist' && <ArtistsList />}
      {searchType === 'track' && <TrackList />}
    </>
  );
}

function App() {
  return (
    <SearchProvider>
      <Title />
      <SearchBar />
      <Content />
    </SearchProvider>
  );
}

export default App;

