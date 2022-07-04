 
import { useState } from 'react'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LocationMarker from './LocationMarker';
import './ClimbSpotMap.css'
  
const ClimbSpotMap = ({ climb, setCoordinates, editEnable }) => {
  const [marker, setMarker] = useState(climb);
 
  const longitude = marker === undefined ||  marker.longitude === 0.0 ? 20 : marker.longitude;
  const latitude = marker === undefined || marker.latitude === 0.0 ? 50 : marker.latitude;

  const position = [latitude, longitude]; 
  
  return ( 
<MapContainer 
className='map'
center={position} 
zoom={5} 
scrollWheelZoom={true}   
style={{ height: "30vh", width: "35vh" }}>
    <TileLayer 
      url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
    /> 
     <LocationMarker climb={climb} setCoordinates={setCoordinates} editEnable={editEnable} />
  </MapContainer>  
  );
};

export default ClimbSpotMap;
