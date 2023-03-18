import React from 'react';

import BookedTrips from '../components/BookedTrips';

const Basket = ({bookedTrips}) => {
    const bookedTripsNodes = bookedTrips.map((trip) => {
        return <BookedTrips key={trip.id} trip={trip}/> 
    })

    return (
        <>
        <h1>This is a basket</h1>
        {bookedTripsNodes}
        </>
    )
}

export default Basket; 