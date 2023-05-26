import { useState } from 'react';
import TripList from './Components/TripList';

function App() {
  const [showTripList, setShowTripList] = useState(true);
  return (
    <div className="app">
      <button
        type="button"
        onClick={() => setShowTripList(false)}
      >
        Hide Trips
      </button>
      {showTripList && <TripList />}
    </div>
  );
}

export default App;
