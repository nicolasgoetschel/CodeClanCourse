import React from "react";
import DestinationList from "./DestinationList";
import AddToBasket from "./AddToBasket";

const DestinationItem = ({destination, handleTrips, isBooked}) => {
    return (
        <>
        <li>
            <h3>Trip to {destination.name}</h3>
            <p>£{destination.price}</p>
            <p>{destination.length}</p>
            <AddToBasket destination={destination} handleTrips={handleTrips} isBooked={isBooked}/>
        </li>
        </>
    )
}

export default DestinationItem;
