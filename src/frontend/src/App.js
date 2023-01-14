import { useEffect, useState } from "react";

function App() {

  const [houses, setHouses] = useState([]);
  const [isFetching, setIsFetching] = useState(true)

  const fetchHouses = () =>
    fetch("api/v1/houses")
    .then(res => res.json())
    .then(data => setHouses(data))
    .then(setIsFetching(false))
  
  useEffect(() => {
    fetchHouses();
  },[])

  const renderHouses = () => {
    if (isFetching) return 'Loading...';
    if (!houses.length) return 'No data'
    return houses.map((house, i) => (
        <div key={house.id}>{house.url}</div>
      ))
  }

  return (
    <div>
      Main
      <div>{renderHouses()}</div>
    </div>
  );
}

export default App;
