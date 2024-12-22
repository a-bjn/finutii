import './styles/App.css';
import './styles/Carousel.css';
import './styles/Header.css';

import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import Brands from './components/Brands.tsx';
import Contact from './components/Contact.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container app-stretch">
        <Header />
        <Home />
        <Contact />
        <About />
        <Brands />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
