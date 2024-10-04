import '../styles/Brands.css'
import '../styles/App.css'
import BrandGrid from './BrandGrid';

const Brands = () => {
    return (
        <>
            <div className="colab-container">
                <div className="colab-title-wrap">
                    <div className="colab-info">
                        <p>
                            Service-ul nostru de reparatii TV lucreaza cu o 
                            gama larga de brand-uri de televizoare.
                        </p>
                    </div>
                </div>
                <BrandGrid/>
            </div>
        </>
    )
};

export default Brands;
