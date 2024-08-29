import './styles/App.css'
import './styles/Carousel.css'
import './styles/Header.css'

import Header from './components/Header.tsx'

function App() {
  return (
    <>
      <div className="app-container app-stretch background">
        <div className="app-header">
          <Header/>
        </div>
        
      </div>
    </>
  )
}

export default App