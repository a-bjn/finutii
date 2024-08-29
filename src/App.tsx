import './styles/App.css'
import './styles/Carousel.css'
import './styles/Header.css'

import Header from './components/Header.tsx'
import Carousel from './components/Carousel.tsx'
import Footer from './components/Footer.tsx'
import InfoBoard from './components/InfoBoard.tsx'

function App() {
  return (
    <>
      <div className="app-container app-stretch background">
        <div className="app-header">
          <Header/>
        </div>
        <div className="carousel">
          <Carousel/>
        </div>
        <div className="info-board">
          <InfoBoard/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App