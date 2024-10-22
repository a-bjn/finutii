import './styles/App.css';
import './styles/Carousel.css';
import './styles/Header.css';

import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import Brands from './components/Brands.tsx';
import Contact from './components/Contact.tsx';
import ScrollToSection from './components/ScrollToSection';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container app-stretch">
        <Header />
        <div id="home"><Home /></div>
        <div id="contact"><Contact /></div>
        <div id="about"><About /></div>
        <div id="brands"><Brands /></div>
        <Footer />
        <ScrollToSection />
      </div>
    </Router>
  );
}

export default App;
