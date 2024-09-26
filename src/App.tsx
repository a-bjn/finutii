import './styles/App.css'
import './styles/Carousel.css'
import './styles/Header.css'

import Header from './components/Header.tsx'
import Welcome from './components/Welcome.tsx'
import Showcase from './components/Showcase.tsx'
import About from './components/About.tsx'

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
        <div className="showcase">
          <Showcase/>
        </div>
      </div>
    </>
  )
}

export default App