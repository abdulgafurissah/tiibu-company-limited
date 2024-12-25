import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/service';
import Projets from './pages/projets';
import Contact from './pages/contact';
import Career from './pages/career';
import Admin from './pages/admin';
import RootLayout from './rootLayout/rootlayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RootLayout />
        <Routes>
          <Route path="admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="projets" element={<Projets />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
