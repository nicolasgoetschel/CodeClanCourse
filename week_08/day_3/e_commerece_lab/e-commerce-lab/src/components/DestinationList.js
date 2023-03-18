import React from "react";
import DestinationItem from "./DestinationItem";

const DestinationList = ({destinations, handleTrips, checkIfBooked}) => {
    
    const destinationNodes = destinations.map((destination) => {
        const isBooked = checkIfBooked(destination.name)
        return <DestinationItem key={destination.id} destination={destination} handleTrips={handleTrips} isBooked={isBooked}/>
    }) 
    
    return (
        <>
        <h4>Destination List</h4>
        <ul>
            {destinationNodes}
        </ul>
        </>
    )
}

export default DestinationList; 