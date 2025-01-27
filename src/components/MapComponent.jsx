import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const SearchControl = () => {
  const map = useMap();

  React.useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar", 
      autoClose: true,
      keepResults: true, 
    });

    map.addControl(searchControl);

    return () => {
      if (map && searchControl) {
        map.removeControl(searchControl); 
      }
    };
  }, [map]);

  return null;
};

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);

  const handleAddMarker = (e) => {
    if (!e || !e.latlng) return; 
    const { lat, lng } = e.latlng;
    setMarkers((prev) => [
      ...prev,
      {
        position: [lat, lng],
        name: `Marker at (${lat.toFixed(2)}, ${lng.toFixed(2)})`,
      },
    ]);
  };

  return (
    <div>
      <MapContainer
        center={[30.0444, 31.2357]} 
        zoom={13}
        style={{ height: "500px", width: "50% !important" }}
        onClick={handleAddMarker}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />

        <SearchControl />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
