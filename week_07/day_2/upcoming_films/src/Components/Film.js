import React from "react";

const Film = function({children, link}){
    return(
    <>
    <li><a id="link" href={link}>{children}</a></li>
    </>    
)};

export default Film;