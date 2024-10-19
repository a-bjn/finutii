import '../styles/Header.css'
import '../styles/App.css'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Reparatii TV Braila - Garantie 1 an</title>
                <meta name="description" content="Reparatii TV Braila ofera garantie 1 an pentru orice reparatie de televizor TV/LCD/LED." />
            </Helmet>
            <div className="header-content-wrap">
                <div className="logo-wrap">
                    <p className="big-text thick-text">Reparații TV Brăila</p>
                    <p className="small-text thin-text">TV/LCD/LED - CHEI AUTO - TELECOMENZI</p>
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
                                    <p>Locație:</p>
                                </div>
                                <p>Str. General Eremia Grigorescu 40, Lângă Oficiul Poștal</p>
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