import '../styles/Contact.css';
import '../styles/App.css';
import { MapPin, Phone, Clock } from "lucide-react";
import Map from './Map';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const location = {
        lat: 45.278841319272914,
        lng: 27.96102265046427,
    };
    
    const openGoogleMapsDirections = () => {
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Reparații TV Braila - Contact: 0729 026 656</title>
                <meta 
                    name="description" 
                    content="Contactati Reparații TV Braila pentru reparații televizoare de toate tipurile, reparații electronice și telecomenzi. Locația noastră este pe Str. General Eremia Grigorescu 40. Deschisi Luni-Vineri, 8:00-17:00." 
                />
            </Helmet>
            <section id="contact">
                <div className="contact-container">
                    <div className="contact-title">
                        <p>Date de contact</p>
                    </div>
                    <div className="contact-wrap">
                        <div className="contact-data">
                            <div className="contact-data-wrap">
                                <Phone className="icon phone-icon" />
                                <div className="data-info">
                                    <p className="info-title">Telefon:</p>
                                    <p className="info">+40 729 026 656</p>
                                </div>
                            </div>
                            <div className="contact-data-wrap">
                                <Clock className="icon clock-icon" />
                                <div className="data-info">
                                    <p className="info-title">Program:</p>
                                    <p className="info">Luni-Vineri 8:00-17:00</p>
                                </div>
                            </div>
                            <div className="contact-data-wrap">
                                <MapPin className="icon map-icon" />
                                <div className="data-info">
                                    <p className="info-title">Adresa:</p>
                                    <p className="info">Str. General Eremia Grigorescu 40 Langa Oficiul Postal</p>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <Map/>
                            <button onClick={openGoogleMapsDirections}>
                                Indicații către service
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact;
