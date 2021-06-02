import logo from './logo.svg';
import './App.css'
import { useEffect, useState } from 'react';
import useCoronaData from './useCoronaData';

function App() {
  const [title, setTitle] = useState("");
  const data = useCoronaData(title);
  
  let confirmed = "";
  let deaths = "";
  let recovered = "";
  let name = "";
  if (data !== undefined) {
    confirmed = `Confirmed: ${data.latest_data.confirmed},`;
    deaths = `Deaths: ${data.latest_data.deaths},`;
    recovered = `Recovered: ${data.latest_data.recovered}`;
    name = data.name;
  }

  return (
    <div className="App">
      <h2>Write two-digit country code for Covid-19 information.</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <h1>{name}</h1>
      <h3>{confirmed} {deaths} {recovered}</h3>
    </div>
  );
}

export default App;
