import React, { useState } from "react";

export default function SearchForm({ setSearch }) {
// Define the SearchForm component which expects a setSearch function as a prop
  const [word, setWord] = useState("");
  // Define the state variable word and its corresponding setState function 
  // with an initial value of an empty string


  function handleSubmit(event) {
    event.preventDefault();
    // Prevent the form from submitting and reloading the page
    setSearch(word);
    // Call the setSearch function from the prop and pass in 
    // the current value of the word state variable
  }

  return (
    <form onSubmit={handleSubmit}>
    {/* Define a form element with a submit event handler */}
      <input
        type="text"
        name="search"
        id="search"
        onChange={(event) => setWord(event.target.value)}
        // Add an event listener to the input element to update the word 
        // state variable as the user types
      />
      <button>Search</button>
      {/* Add a button element to submit the form */}
    </form>
  );
}