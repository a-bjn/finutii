import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-wrap">
                    <div className="copyright">
                        <p>© 2024 ReparatiiTVBraila. Toate drepturile sunt rezervate.</p>
                    </div>
                    <div className="footer-info">
                        <div className="footer-info-wrap">
                            <div className="info-title">
                                <p>Contact:</p>
                            </div>
                            <p>+40 735 156 317</p>
                        </div>
                        
                        <div className="footer-info-wrap">
                            <div className="info-title">
                                <p>Adresa:</p>
                            </div>
                            <p>Str. General Eremia Grigorescu 40 Langa Oficiul Postal</p>
                        </div>
                        
                        <div className="footer-info-wrap">
                            <div className="info-title">
                                <p>Program:</p>
                            </div>
                            <p>Luni - Vineri 8:00-17:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;