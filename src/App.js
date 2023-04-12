import { Routes, Route } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage';
import SearchReasult from './components/SearchResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />}>
        <Route index element={<p>enter a search to begin</p>} />
        <Route path="/search/:querryText" element={<SearchReasult />} />
      </Route>
    </Routes>
  );
}

export default App;
