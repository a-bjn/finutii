import '../styles/About.css'
import '../styles/App.css'
import Carousel from './Carousel.tsx'

const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="about-title">
                    <p>Despre noi</p>
                </div>
                <div className="box-wrap">
                    <div className="about-wrap">
                        <div className="info-container">
                            <div className="about-sub-title">
                                <p>Cine suntem?</p>
                            </div>
                            <div className="info-box">
                                <p>Reparatii TV Braila este destinatia ta locala pentru servicii de incredere de reparatii TV si electronice. 
                                Cu o experienta de peste 30 ani in electronistica, suntem specializați în diagnosticarea și remedierea unei game largi de probleme electronice. Angajamentul nostru 
                                este de a oferi reparații de înaltă calitate în timp util, asigurând satisfacția clienților și buna funcționare a dispozitivelor dumneavoastră.
                                </p>
                            </div>
                        </div>
                        <div className="info-container">
                            <div className="about-sub-title">
                                <p>Cu ce ne ocupam?</p>
                            </div>
                            <div className="info-box">
                                <p>Welcome to reparatii TV Braila, your go-to local business for expert TV repair services, TV remote sales, and electronics fixing in Braila.
                                We pride ourselves on being a modern and tech-savvy TV repair shop dedicated to providing top-notch solutions for all fo your electronic needs.
                                Our mission is to deliver reliable services and create a seamless experience for our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel">
                        <Carousel/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
