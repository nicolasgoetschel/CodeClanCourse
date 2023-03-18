import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import StoreContainer from './containers/StoreContainer';
import NavBar from './components/NavBar';
import Basket from './components/Basket';


function App() {

  const [bookedTrips, setBookedTrips] = useState([]);
    
  const handleTrips = (trip) => {
      if(!bookedTrips.includes(trip)) {
        console.log("running");
          setBookedTrips([...bookedTrips, trip])
      }
  }

  const checkIfBooked = (trip) => {
    if(bookedTrips.includes(trip)) {
      return true 
    } else {
      return false
    }
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<StoreContainer handleTrips={handleTrips} checkIfBooked={checkIfBooked}/>}/>
        <Route path="/basket" element={<Basket bookedTrips={bookedTrips}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
