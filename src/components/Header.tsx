import '../styles/Header.css'
import '../styles/App.css'
import { useState, useEffect } from 'react';

const Header = () => {
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

    return (
        <>
            <div className="header-content-wrap">
                <div className="logo-wrap">
                    <p className="big-text thick-text">Reparatii TV Braila</p>
                    <p className="small-text thin-text">TV/LCD/LED AUTO TELECOMENZI</p>
                </div>
                {
                    isMobile ? (<></>) : (
                        <div className="information-wrap">
                            <div className="information-component">
                                <div className="info-title">
                                    <p>Contact:</p>
                                </div>
                                <p>+40 0735156317</p>
                            </div>
                            <div className="information-component">
                                <div className="info-title">
                                    <p>Locatie:</p>
                                </div>
                                <p>Str. General Eremia Grigorescu 40 Langa Oficiul Postal</p>
                            </div>
                            <div className="information-component">
                                <div className="info-title">
                                    <p>Program:</p>
                                </div>
                                <p>Luni - Vineri 8:00-17:00</p>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </>
    )
};

export default Header;