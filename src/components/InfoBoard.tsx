import '../styles/InfoBoard.css'
import '../styles/App.css'

const InfoBoard = () => {

    const handleClick = (buttonNumber: number) => {
        alert(`Button ${buttonNumber} clicked!`);
    };

    return (
        <>
            <div className="infoboard-wrap">
                <div className="infoboard-container">
                    <div className="top-bar-container">
                        <div className="button-container">
                            <div className="button-wrap">
                                <button onClick={() => handleClick(1)}>Despre noi</button>
                            </div>
                            <div className="button-wrap">
                                <button onClick={() => handleClick(2)}>Service TV</button>
                            </div>
                            <div className="button-wrap">
                                <button onClick={() => handleClick(3)}>Service Electronice</button>
                            </div>
                            <div className="button-wrap">
                                <button onClick={() => handleClick(4)}>Telecomenzi</button>
                            </div>
                            <div className="button-wrap">
                                <button onClick={() => handleClick(4)}>Xerox</button>
                            </div>
                            <div className="button-wrap">
                                <button onClick={() => handleClick(4)}>Partenerii nostrii</button>
                            </div>
                        </div>
                    </div>
                    <div className="info-section">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default InfoBoard;