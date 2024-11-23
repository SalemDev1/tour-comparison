// Importing the React functions
import React, { useState, useEffect } from 'react';


function Gallery() {
  // State to store tours and loading/error messages
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

 // Fetching the tours from the API whenever the tours load
useEffect(() => {
  fetch('https://www.course-api.com/react-tours-project')
    .then((reply) => {
      
      if (!reply.ok) {
        throw new Error('Failed to fetch tours, no vacay for you today!'); // In case an error occurs while loading tours
      }
      return reply.json();
    })
    .then((dataset) => {
      // Save the fetched(dataset) tours in the state
      setTours(dataset);
      setLoading(false); // Turn off loading
    })
    .catch((failedattempt) => {
      setError(failedattempt.message); // Saves the error message
      setLoading(false); // Turn off loading
    });
}, []); // empties the array and ensures this runs only once

  // Function that is used remove a tour from the list
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Loading state
  if (loading) {
    return <h2>Tours are loading</h2>;
  }

  // Error state
if (error) {
  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      <p>{error}</p>
      <p>Please try refreshing the page or check your internet connection.</p>
    </div>
  );
}

  // Displays the Tours alongside its image,info, and price 
  //It also includes the Not Interested button which once clicked will remove tour altogeter 
  return (
    <div className="gallery-container">
      <h2 className="gallery-header">Available Tours in 2025 </h2>
      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.name} className="tour-image" />
          <h3 className="tour-name">{tour.name}</h3>
          <p className="tour-price">Price: ${tour.price}</p>
          <p className="tour-info">{tour.info}</p>
          <button className="tour-button" onClick={() => removeTour(tour.id)}>
            Not Interested
          </button>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

