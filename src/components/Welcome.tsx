import '../styles/App.css'
import '../styles/Welcome.css'

const Welcome = () => {
    return (
        <>
            <div className="welcome-container">
                <div className="welcome-title">
                    <p>Reparatii Televizoare</p>
                </div>
                <div className="servicii">
                    <div className="bubble-border">
                        <p>
                            Reparatii televizoare si alte electronice
                        </p>
                    </div>
                    <div className="bubble-border">
                        <p>
                            Telecomenzi plus baterii 
                        </p>
                    </div>
                    <div className="bubble-border">
                        <p>
                            Xerox copiator si laminare
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Welcome;