import '../styles/App.css'
import '../styles/Welcome.css'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Welcome = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDial = () => {
        window.location.href = 'tel:+400729026656';
    };

    return (
        <>
            <Helmet>
                <title>Reparatii TV Braila | Telecomenzi TV | Chei Auto | Garantie 1 An</title>
                <meta name="description" content="Reparatii TV Braila ofera servicii rapide și de încredere de reparatii TV în Brăila. 
                Cu o experienta de 30 de ani ne ocupam de reparatii TV pentru orice marca: Samsung, LG, Philips, Panasonic etc." />
            </Helmet>
            <section id="home">
                <div className="welcome-container">
                    <div className="welcome-title">
                        <p>Reparații Televizoare</p>
                        <div className="welcome-sub-title">
                            <p>Servicii rapide și de încredere</p>
                        </div>
                    </div>
                    {
                        isMobile ? (
                            <div className="contact-button">
                                <button onClick={handleDial}>Apelați-ne aici!</button>
                            </div>
                        ) : (
                            <div className="servicii">
                                <div className="bubble-border">
                                    <p>Telecomenzi TV</p>
                                </div>
                                <div className="bubble-border">
                                    <p>Service televizoare TV/LCD/LED</p>
                                </div>
                                <div className="bubble-border">
                                    <p>Chei auto</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
};

export default Welcome;
