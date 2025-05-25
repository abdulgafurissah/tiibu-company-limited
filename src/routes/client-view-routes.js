import { Routes, Route} from 'react-router-dom';
import Home from '../pages/user/home';
import About from '../pages/user/about';
import Services from '../pages/user/service';
import Projets from '../pages/user/projets';
import Contact from '../pages/user/contact';
import Career from '../pages/user/career';
import Header from '../components/client-view-header';
import SingleProjectView from '../pages/user/SingleProjectView';
import BlogListPage from '../pages/user/BlogListPage';

function ClientViewRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="projet" element={<Projets />} />
        <Route path="contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="/projects/:id" element={<SingleProjectView />} />
        <Route path="/blog" element={<BlogListPage />} />
      </Routes>
    </>
  );
}

export default ClientViewRoutes;


