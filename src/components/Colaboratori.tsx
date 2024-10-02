import '../styles/Colaboratori.css'
import '../styles/App.css'
import BrandGrid from './BrandGrid';

const Colaboratori = () => {
    return (
        <>
            <div className="colab-container">
                <div className="colab-title-wrap">
                    <div className="colab-title">
                        <p>Colaboratori</p>
                    </div>
                    <div className="colab-info">
                        <p>
                            Service-ul nostru de reparatii TV lucreaza cu o 
                            gama larga de brand-uri de televizoare si telecomenzi.
                        </p>
                    </div>
                </div>
                <BrandGrid/>
            </div>
        </>
    )
};

export default Colaboratori;
