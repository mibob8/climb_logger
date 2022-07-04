import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import NewClimbForm from './components/NewClimbForm';
import Climbs from './components/Climbs';
import { Fragment, useState } from 'react';
import EmptyPageInfo from './components/EmptyPageInfo';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './components/Details';
import { nanoid } from 'nanoid';
import EditClimbForm from './components/EditClimbForm';
import {useNavigate} from 'react-router-dom'

function App() {
  const [climbs, setClimbs] = useState([
    {
      id: nanoid(),
      miejsce: 'Alicante',
      data: '2022-02-02',
      droga: 'Sante Armona',
      wycena: '5b',
      latitude: 50.0,
      longitude: 20.0,
      opis: '',
      picture: '',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [logIn, setLogIn] = useState(false); 

  const addClimb = (climb) => {
    setClimbs([climb, ...climbs]);
    console.log(climb.id);
  };

  const updateClimb = (id, climb) => { 
    const newList = climbs.map((item) => {
      if (item.id === id) { 
        return climb;
      } 
      return item;
    });

    setClimbs(newList);
  };

  const removeClimb = (id) => {
    const filteredClimb = climbs.filter((climb) => climb.id !== id);
    setClimbs(filteredClimb);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleLogIn = () => {
    setLogIn(!logIn); 
  };
 
 
  const content = (
    <>
      <Routes>
        <Route>
         
        </Route>



        <Route
          exact={true}
          path='/'
          element={
            <div> 
              {climbs.length === 0 ? (
                <EmptyPageInfo></EmptyPageInfo>
              ) : (
                <Climbs climbs={climbs} removeClimb={removeClimb}></Climbs>
              )}
            </div>
          }
        ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route
          exact={true}
          path='/details/:id'
          element={<Details climbs={climbs}></Details>}
        />
        <Route
          exact={true}
          path='/createnew'
          element={<NewClimbForm  addClimb={addClimb}> </NewClimbForm>  }
        />
        <Route
          exact={true}
          path='/login'
          element={<Login toggleLogIn2={toggleLogIn}></Login>}
        />

        <Route
          exact={true}
          path='/edit/:id'
          element={<EditClimbForm updateClimb={updateClimb} climbs={climbs} ></EditClimbForm>}
        />

      </Routes>
    </>
  );

  return (
    <Router>
      <div className='App container' style={{maxWidth: '800px'}}>
        <Header
          toggleForm={toggleForm}
          showForm={showForm}
          toggleLogIn={toggleLogIn}
          showLogIn={logIn}
        ></Header>
        {content}
      </div>
    </Router>
  );
}

export default App;
