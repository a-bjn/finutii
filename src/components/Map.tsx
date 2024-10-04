import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/Map.css'

// Custom Leaflet icon to avoid default marker icon issues
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapWithDirections = () => {
  const location = {
    lat: 45.278841319272914,
    lng: 27.96102265046427,
  };

  return (
    <div className="map-container">
      <MapContainer
        center={location}
        zoom={17}
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location} icon={customIcon}>
          <Popup>
            Locatia ta
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapWithDirections;
