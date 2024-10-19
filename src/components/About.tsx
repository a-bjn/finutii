import '../styles/About.css'
import '../styles/App.css'
import Carousel from './Carousel.tsx'
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>Despre noi - Reparatii Televizoare Braila - Service TV/LED/LCD</title>
                <meta 
                    name="description" 
                    content="Reparatii televizoare in Braila, oferim servicii profesionale de reparatii televizoare TV/LCD/LED, telecomenzi TV și chei auto.
                    Suntem specializati în repararea televizoarelor de toate marcile: Samsung, LG, Philips, Sony, Panasonic." 
                />
            </Helmet>
            <section id="about">
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
                                    Reparații TV Brăila este destinația ta pentru servicii de încredere și 
                                    rapide de reparații TV. Cu o experiență de peste 30 de ani în 
                                    electronică, suntem specializați în diagnosticarea și remedierea unei 
                                    game largi de probleme electronice.
                                    </p>
                                </div>
                                <div className="about-sub-title">
                                    <p>Serviciile pe care le oferim</p>
                                </div>
                                <div className="services">
                                    <div className="service-wrap">
                                        <div className="bullet"/>
                                        <p>Reparații TV/LCD/LED</p>
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
            </section>
        </>
    )
};

export default About;