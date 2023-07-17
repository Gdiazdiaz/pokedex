import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/mainPage';
import DetailsPage from './Pages/detailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details/:name/" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;