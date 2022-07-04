import React, { useState } from 'react'; 
import ClimbSpotMap from './MapsComponent/ClimbSpotMap';
import './NewClimbForm.css' 
import ClimbForm from './ClimbForm';
import { useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';   
import { Link } from 'react-router-dom';  
import './EditClimbForm.css'
import PicturesGallery from './PicturesGallery';
import { storage } from "../firebase/index";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { async } from '@firebase/util'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
const EditClimbForm = ({ updateClimb, climbs }) => {

    const {id} = useParams();
    const [form, setForm] = useState();
    const navigate = useNavigate();
    const [imageLoadingProgress, setImageLoadingProgress] = useState();
    const [imageIsLoading, setImageIsLoading] = useState(false);
    const [imageIsLoaded, setImageIsLoaded] = useState(false); 
    const [imgUrl, setImgUrl] = useState('')
 
    const fetchClimb = () => {
        const climb = climbs.find(n=>n.id === id);
        setForm(climb);
        setImgUrl(climb.picture);
        setImageIsLoaded(true);
         setImageIsLoading(false)
        console.log(climb);
    };

    useEffect(() => {
        fetchClimb();
    }, []);
 
  const submit = (e) => {
    e.preventDefault();  
    console.log("submit")
    console.log(form);

    if(form.miejsce === ""){ 
      alert("Uzupełnij miejsce wspinaczki");
      return;
    }

    if(form.droga === ""){ 
      alert("Uzupełnij nazwę drogi");
      return;
    }

    if(form.wycena === ""){ 
      alert("Uzupełnij wycenę");
      return;
    }
 
    updateClimb(id, form); 
    navigate('/');
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
 
    if(name === 'picture' ){
      const image = event.target.files[0];  
      handleUpload(image) 
   }
   else{
     setForm({ ...form, [name]: value }); 
   }  
  };

  const setCoordinates = (longitude, latitude) => {
    setForm({
      ...form,
      latitude: latitude,
      longitude: longitude,
    }); 
  };

  const handleUpload = async (image) => { 
    const storageRef = ref(storage, `files/${form.id + "_" + image.name}`);

    setImageIsLoading(true)

    const uploadTask = uploadBytesResumable(storageRef, image);
 
    uploadTask.on("state_changed",
      (snapshot) => { 
        var percent = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        setImageLoadingProgress(percent)
        console.log(imageLoadingProgress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         setImgUrl(downloadURL) 
         updateWithUrl(downloadURL); 
         setImageIsLoaded(true);
         setImageIsLoading(false)
        });
      }
    );
  };

  const updateWithUrl = (path) => { 
  setForm({ ...form, picture: path});  
  }
   
  const removeImage = () => {
    setImageIsLoaded(false);
    deleteFromFirebase(imgUrl);
    console.log(imageIsLoaded)
  }

  const deleteFromFirebase = (url) => { 
    const storageRef = ref(storage, url); 
   storageRef.delete()
      .then(() => { 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='card text-white bg-dark mt-1'>
      <h5 className='card-header bg-success'>Edytuj wspinaczkę:</h5>
      <form id='form' className='card-body row' onSubmit={submit}> 
        <div className='col-sm-6'>
          <ClimbForm handleChange={handleChange} form={form}>
          </ClimbForm>    
        </div>
        <div className='col-sm-6'>
          <label className='control-label m-3'>
            Zaznacz wskaźnikiem myszy lokalizację:
          </label>
          <ClimbSpotMap
            className='control-label m-3'
            climb={form}
            setCoordinates={setCoordinates}
            editEnable={true}
          ></ClimbSpotMap>
        </div>
        {imageIsLoaded && !imageIsLoading ?  <PicturesGallery picturePath={imgUrl} removeImage={removeImage}></PicturesGallery> : null}
        {imageIsLoading ? <CircularProgressbar value={imageLoadingProgress} maxValue={100} text={`${imageLoadingProgress}%`}></CircularProgressbar> : null}
        
      </form>

<div>
  
</div>

      <div className='col-6 align-self-center' > 
      <button type='submit' form='form' className='btn btn-success col-md-3 offset-md-1 text-nowrap' style={{width: '150px'}}>
            Zapisz zmiany
          </button>   
          <Link to={`/`} className='btn btn-danger col-md-3  offset-md-1 '>
              Anuluj
            </Link>
            
        </div>
    </div>
  );
};

export default EditClimbForm;