import { ArtistsList } from './components/ArtistList';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <>
      <SearchProvider>
        <Title />
        <SearchBar />
        <ArtistsList />
      </SearchProvider>
    </>
  );
}

export default App;
