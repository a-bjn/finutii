import './styles/App.css'
import './styles/Carousel.css'
import './styles/Header.css'

import Header from './components/Header.tsx'
import Welcome from './components/Welcome.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import Colaboratori from './components/Colaboratori.tsx'

function App() {
  return (
    <>
      <div className="app-container app-stretch">
        <div className="app-header">
          <Header/>
        </div>
        <div className="welcome">
          <Welcome/>
        </div>
        <div className="about-us">
          <About/>
        </div>
        <div className="colab">
          <Colaboratori/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App