import '../styles/App.css'
import '../styles/Welcome.css'
import { useState, useEffect } from 'react';

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
            <div className="welcome-container">
                <div className="welcome-title">
                    <p>Reparatii Televizoare</p>
                    <div className="welcome-sub-title">
                        <p>Servicii rapide si de incredere pentru toate marcile de televizoare</p>
                    </div>
                </div>
                {
                    isMobile ? (
                        <div className="contact-button">
                            <button onClick={handleDial}>Contact</button>
                        </div>
                    ) : (
                        <div className="servicii">
                            <div className="bubble-border">
                                <p>Service televizoare si alte electronice</p>
                            </div>
                            <div className="bubble-border">
                                <p>Oferim telecomenzi si baterii </p>
                            </div>
                            <div className="bubble-border">
                                <p>Reparam chei auto</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
};

export default Welcome;
