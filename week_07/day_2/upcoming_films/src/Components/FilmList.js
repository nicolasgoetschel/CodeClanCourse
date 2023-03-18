import React from "react";
import Film from './Film.js'

const FilmList = function({films}){
    const filmNodes = films.map(film => (
        <Film key={film.id} link={film.url}>{film.name}</Film>
    ));



    return(
        <ul>
            {filmNodes}
        </ul>
    );
};

export default FilmList;