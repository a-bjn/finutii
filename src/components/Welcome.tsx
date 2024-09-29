import '../styles/App.css'
import '../styles/Welcome.css'

const Welcome = () => {
    return (
        <>
            <div className="welcome-container">
                <div className="welcome-title">
                    <p>Reparatii Televizoare</p>
                    <div className="welcome-sub-title">
                        <p>Servicii rapide si de incredere pentru toate marcile de televizoare</p>
                    </div>
                </div>
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
            </div>
        </>
    )
};

export default Welcome;
