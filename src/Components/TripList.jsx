import { useCallback, useEffect, useState } from 'react';

import './TripList.css';

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState('http://localhost:8000/trips');

  const fetchTrips = useCallback(async () => {
    const res = await fetch(url);
    const data = await res.json();
    setTrips(data);
  }, [url]);

  console.log(trips);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          type="button"
          onClick={() => setUrl('http://localhost:8000/trips?loc=europe')}
        >
          Eurpoeans
        </button>
        <button
          type="button"
          onClick={() => setUrl('http://localhost:8000/trips')}
        >
          All
        </button>
      </div>
    </div>
  );
}

export default TripList;