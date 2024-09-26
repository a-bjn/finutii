import Carousel from './Carousel.tsx'
import '../styles/Showcase.css'
import '../styles/App.css'

const Showcase = () => {
    return (
        <>
            <div className="showcase-container">
                <div className="carousel">
                    <Carousel/>
                </div>
            </div>
        </>
    )
};

export default Showcase;