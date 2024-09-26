// src/MapComponent.jsx

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Your custom CSS for layout

// Import your custom marker image
import ZLocationMarker from './assets/ZLocationMarker.png';

// Set the custom marker icon for Leaflet
const customIcon = new L.Icon({
  iconUrl: ZLocationMarker,
  iconSize: [32, 32], // Adjust the size to match your custom image
  iconAnchor: [16, 32], // Anchor the icon appropriately (center it on the map marker point)
  popupAnchor: [0, -32], // Position the popup slightly above the marker
});

const App = () => {
  const [stations, setStations] = useState([]);

  // Fetch station data from the backend
  useEffect(() => {
    fetch('http://localhost:5001/stations')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched stations:", data); // Log the fetched data for debugging
        setStations(data);
      })
      .catch(error => console.error('Error fetching station data:', error));
  }, []);

  return (
    <div className="map-container">
      <MapContainer 
        center={[-40.9006, 174.8860]} // Coordinates of New Zealand
        zoom={6}                      // Zoom level
        style={{ height: "100vh", width: "100%" }} // Full screen height and width
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render markers for each station */}
        {stations && stations.length > 0 && stations.map(station => {
          if (station.location && station.location.coordinates) {
            console.log(`Rendering marker for station "${station.name}" at coordinates:`, station.location.coordinates);
            return (
              <Marker 
                key={station._id} 
                position={[station.location.coordinates.lat, station.location.coordinates.lng]}
                icon={customIcon} // Use the custom marker icon
              >
                <Popup>
                  <strong>{station.name}</strong><br />
                  {station.location.suburb}, {station.location.city}
                </Popup>
              </Marker>
            );
          } else {
            console.warn(`Skipping station "${station.name}" due to missing coordinates.`);
            return null;
          }
        })}
      </MapContainer>
    </div>
  );
};

export default App;
