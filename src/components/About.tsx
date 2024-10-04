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
                                <p>
                                    Reparatii TV Braila este destinatia ta pentru servicii de incredere si rapide de reparatii 
                                    TV/LCD/LED. Cu o experienta de peste 30 ani in electronistica, suntem specializați
                                    în diagnosticarea și remedierea unei game largi de probleme electronice.
                                </p>
                            </div>
                            <div className="about-sub-title">
                                <p>Serviciile pe care le oferim</p>
                            </div>
                            <div className="services">
                                <div className="service-wrap">
                                    <div className="bullet"/>
                                    <p>Reparatii Televizoare</p>
                                </div>
                                <div className="service-wrap">
                                    <div className="bullet"/>
                                    <p>Telecomenzi TV</p>
                                </div>
                                <div className="service-wrap">
                                    <div className="bullet"/>
                                    <p>Chei Auto</p>
                                </div>
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