import '../styles/Header.css'

const Header = () => {
    return (
        <>
        <div className="header-content-wrap">
            <div className="logo-wrap">
                <p className="big-text">Reparatii Braila</p>
                <p className="small-text">TV/LCD/LED... CD/DVD AUTO... TELECOMENZI</p>
            </div>
            <div className="information-wrap">
                <div className="information-component">
                <p className="medium-text">Contact:</p>
                    <img src="src/assets/telefon.svg"/>
                <p className="medium-text text-underline">+40 0735156317</p>
                </div>
                <div className="information-component">
                <p className="medium-text">Locatie:</p>
                    <img src="src/assets/pinpoint.svg"></img>
                <p className="medium-text text-underline">Str. General Eremia Grigorescu 40</p>
                </div>
                <div className="information-component">
                <p className="medium-text">Program:</p>
                    <img src="src/assets/calendar.svg"></img>
                <p className="medium-text text-underline">Luni / Vineri 8:00-17:00</p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Header;