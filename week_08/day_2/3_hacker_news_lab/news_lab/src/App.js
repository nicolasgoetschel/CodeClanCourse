import "./App.css";
import NewsBox from "./containers/NewsBox";

function App() {
  // Declaring a functional component called App
  return (
    <div className="App">
      {/* Returning a div element with a class name of "App" */}
      <NewsBox />
      {/* Rendering the NewsBox component */}
    </div>
  );
}

export default App;
