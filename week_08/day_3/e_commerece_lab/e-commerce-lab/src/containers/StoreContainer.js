import React, {useState} from 'react'; 
import DestinationList from '../components/DestinationList';
import Basket from '../components/Basket';



const StoreContainer = ({handleTrips, checkIfBooked}) => {
    const [destinations, setDestinations] = useState([
        {
            id: 1,
            name: "Paris",
            price: 500, 
            length: "7 days"
        },
        {
            id: 2,
            name: "Rome",
            price: 150, 
            length: "2 days"
        },
        {
            id: 3,
            name: "Benidorm",
            price: 650, 
            length: "14 days"
        },
        {
            id: 4,
            name: "America",
            price: 2000, 
            length: "10 days"
        },
        {
            id: 5,
            name: "Tokyo",
            price: 1350, 
            length: "10 days"
        }
    ])


    return (
        <>
        <h1>Book Your Holiday</h1>
        <DestinationList destinations={destinations} handleTrips={handleTrips} checkIfBooked={checkIfBooked}/>
        </>
    )
}

export default StoreContainer; 