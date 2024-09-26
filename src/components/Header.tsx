import '../styles/Header.css'
import '../styles/App.css'

const Header = () => {
    return (
        <>
            <div className="header-content-wrap">
                <div className="logo-wrap">
                    <div className="logo-wrap-title">
                        <p className="big-text thick-text">Reparatii TV Braila</p>
                        <p className="small-text thin-text">TV/LCD/LED... CD/DVD AUTO... TELECOMENZI</p>
                    </div>
                </div>
                <div className="information-wrap">
                    <div className="information-component">
                        <p className="medium-text thick-text">Contact:</p>
                        <p className="medium-text thin-text">+40 0735156317</p>
                    </div>
                    <div className="information-component">
                        <p className="medium-text thick-text">Locatie:</p>
                        <p className="medium-text thin-text">Str. General Eremia Grigorescu 40</p>
                    </div>
                    <div className="information-component">
                        <p className="medium-text thick-text">Program:</p>
                        <p className="medium-text thin-text">Luni / Vineri 8:00-17:00</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;