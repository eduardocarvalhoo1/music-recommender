import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <>
      <SearchProvider>
        <Title />
        <SearchBar />
      </SearchProvider>
    </>
  );
}

export default App;
