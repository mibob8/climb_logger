import styles from './Details.css'
import {motion, MotionConfig} from "framer-motion";
 
const PicturesGallery = ({picturePath, removeImage}) => {
      
    return (picturePath !== undefined && picturePath !== '' ? 
    <div className=" row col-sm-12">
      <div className="justify-content-justify " > 
    <div>
      <h6 className=' text-center'>Dołączone obrazy:</h6></div>
    <div>
      <motion.div
        layout  
        className="image  d-flex justify-content-around "
        whileHover={{opacity: 1}}  
       // onClick={() => setSelectedImg(doc.url)}
      >
        <motion.img
          src={picturePath}
          alt="uploadded pic"
          initial={{opacity: 0}}
          animate={{  opacity: 1, height:  200, width: 'auto'}}
          className="image-gallery"
          transition={{delay: 1}}
        />
      </motion.div> 
        {!removeImage ??  <button onClick={() => {removeImage()}} type='button' className='btn btn-danger'>
            Usuń obraz
        </button>}  
        </div>
      </div>
    </div>
    
     : null);
}
 
export default PicturesGallery;