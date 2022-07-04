import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({toggleLogIn2}) => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState();
 
  const submit = (e) => {
    e.preventDefault();    
    navigate('/');
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate('/');
  }
  
  return (
    <div className="card text-white bg-dark mt-1 ">
      <div className='card-header bg-warning text-black'>
        Logowanie
      </div>
      <form onSubmit={submit}  className='card-body row justify-content-center '>
        <div className='form-group col-7'>
        <label className='pt-1'>
          <p>Email</p>
          </label>
          <input type='text' className='form-control '/> 
        </div> 
        <div className='form-group col-7'>
        <label className='pt-1'>
          <p>Hasło</p>
          </label>
          <input type='password' className='form-control '/> 
        </div>  
        <div className=' col-6 '>
        <div className="pt-5 " >
        <button onClick={cancel} className='btn btn-danger col-md-5' >Anuluj</button>
          <button type='submit' className='btn btn-success col-md-5  offset-md-2' >Zaloguj</button>   
        </div> 
          </div>  
      </form>
    </div>
  );
};

export default Login;
