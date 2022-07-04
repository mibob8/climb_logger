import React from 'react';
import ClimbSpotMap from './MapsComponent/ClimbSpotMap';
import DmsCoordinates, { parseDms } from 'dms-conversion';
import { Link, useParams } from 'react-router-dom'; 
import PicturesGallery from "./PicturesGallery";
 
const Details = ({ climbs }) => {
  const { id } = useParams();

  let climb = climbs.find((n) => n.id === id);

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
    <div className='card text-white bg-dark mt-1 '>
      <div className='card-header bg-warning text-black'>
       <h6>Data: {climb.data}</h6> 
      </div>
      <div className='card-body row'>
        <div className='col-sm-6'>
          <h5 className='font-weight-bold'>Miejsce:   {climb.miejsce}</h5>
          <h5>Nazwa drogi: {climb.droga}</h5>
          <h5>Wycena: {climb.wycena}</h5>
          <p>Długość geogr.: {longitudeString}</p>
          <p>Szerokość geogr.: {latitudeString}</p>
          <p className='font-weight-bold'>Opis drogi:</p>
          <p className='text-left'>{climb.opis}</p> 
        </div>

        <div className='col-sm-6 d-flex align-items-center'>
          <ClimbSpotMap climb={climb} setCoordinates={null} editEnable={false}></ClimbSpotMap>
        </div>
      </div> 
      <PicturesGallery picturePath={climb.picture} removeImage={null}></PicturesGallery>
      <div className='d-flex justify-content-around p-3'>
        <Link to={`/`} className='btn btn-danger'>
          Wróć do listy
        </Link>
      </div>
    </div>
  );
};

export default Details;
