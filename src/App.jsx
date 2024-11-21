import React from 'react'; 
import Gallery from './Gallery'; // Imports from the Gallery component, which will show all the list of tours

// This is the main App component
function App() {
  return (
    <div className="App">
      <h1>Travel Master Tours</h1>
      <Gallery />
    </div>
  );
}

export default App;