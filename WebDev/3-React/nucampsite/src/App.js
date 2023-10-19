import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
// import { CAMPSITES } from './app/shared/CAMPSITES'


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
        <Route path='directory/:campsiteId' element={<CampsiteDetailPage  />} />  {/* color(:) lets react router know that we intend this word camspiteId to be a route parameter name and not a literal path like word directory or contact*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
