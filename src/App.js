import { useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';

function App() {
  useEffect(() => {
    document.title = 'Simple POS for Small Business';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pos" element={<POSPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
