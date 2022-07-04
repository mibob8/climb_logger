import React from 'react';
import ClimbSpotMap from './MapsComponent/ClimbSpotMap';
import DmsCoordinates, { parseDms } from 'dms-conversion';
import { Link } from 'react-router-dom';  
import './Climb.css'
 
const Climb = ({ climb, removeClimb }) => {
  const MathRound = (value, precision) => {
    const multiply = Math.pow(10, precision);

    return Math.round(value * multiply) / multiply;
  };

  const TranslateCoordinatesToDegrees = (inputLatitude, inputLongitude) => {
    const dmsCoords = new DmsCoordinates(inputLatitude, inputLongitude);
    const { longitude, latitude } = dmsCoords.dmsArrays;

    const [d, m, s] = longitude;
    const longituteString = `${d}°${m}'${MathRound(s, 3)}''`;
    const [dlat, mlat, slat] = latitude;
    const latitudeString = `${dlat}°${mlat}'${MathRound(slat, 3)}''`;

    return [longituteString, latitudeString];
  };

  const [longitudeString, latitudeString] = TranslateCoordinatesToDegrees(
    climb.latitude,
    climb.longitude
  );
 
  return (
    <div className='card text-white bg-dark mt-1'>
      <div className='card-header d-flex align-items-center justify-content-between  text-black bg-warning'>  
      <h6 className=' '>Data: {climb.data}</h6>  
      <button 
          className='btn btn-sm btn-danger'
          onClick={() => removeClimb(climb.id)}>
          Usuń
        </button>  
      </div>
      <div className='card-body row '>
        <div className='col-md-6 flex-column '>
          <h3 className='font-weight-bold'>Miejsce: {climb.miejsce}</h3>
          <h5>Nazwa drogi: {climb.droga}</h5>
          <p>Wycena: {climb.wycena}</p>  

          <div className='d-flex justify-content-around p-5'>
          <Link to={`./edit/${climb.id}`} className='btn btn-info '>Edytuj
          </Link> 
            <Link to={`./details/${climb.id}`} className='btn btn-success '>
              Szczegóły
            </Link>
          </div> 
        </div> 
        <div className='col-sm-6'>
          <ClimbSpotMap 
              climb={climb} 
              editEnable={false}>
          </ClimbSpotMap>
        </div>
      </div>
      
    </div>
  );
};

export default Climb;
