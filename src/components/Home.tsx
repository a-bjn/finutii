import '../styles/App.css';
import '../styles/Home.css';
import { useState, useEffect } from 'react';

const Home = () => {
    const [isMobile, setIsMobile] = useState(true);

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

    useEffect(() => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className="welcome">
            <div className="welcome-container">
                <div className="welcome-title">
                    <p>Reparații Televizoare Braila</p>
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
        </div>
    );
};

export default Home;
