import { isEditable } from '@testing-library/user-event/dist/utils';
import { useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'

const LocationMarker =({climb, setCoordinates, editEnable }) => {
  const [marker, setMarker] = useState(climb);
  const [position, setPosition] = useState({lat: climb.latitude, lng: climb.longitude})
  
  const map = useMapEvents({
    click(e) {
       
         if (editEnable) {
            setMarker({
              ...marker,
              longitude:  e.latlng.lng,
              latitude: e.latlng.lat,
            });

            setCoordinates(e.latlng.lng, e.latlng.lat);
            setPosition(e.latlng) 
         }  
          console.log(e.latlng);
      
    },
    locationfound(e) { 
      if(isEditable){
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        console.log(e.latlng)
      } 
    },
  })
 
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}
export default LocationMarker;
