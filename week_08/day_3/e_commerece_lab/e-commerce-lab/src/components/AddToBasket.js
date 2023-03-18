import React, {useState} from 'react';

const AddToBasket = ({destination, handleTrips, isBooked}) => {
    

    const handleBookedTrips = () => {
        handleTrips(destination.name)
    }


    return (
        <button onClick={handleBookedTrips}>{isBooked ? "Booked" : "Book Now"}</button>
    )
}

export default AddToBasket; 
