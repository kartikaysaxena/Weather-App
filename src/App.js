
import './App.css';
import React, {useState} from 'react';
import SearchLayout from './components/SearchLayout';

function App() {
  const [temp,setTemp] = useState('')
  const [im,setIm] = useState('')
  const [fl,setfl] = useState('')
  const [wd,setWd] = useState('')
  const [ws,setws] = useState('')
  const [city,setCity] = useState('')
  const api = (props) => {
    setTemp(props.temperature)
    setIm(props.weaimg)
    setfl(props.feelslike)
    setWd(props.weather_description)
    setws(props.wind_speed)
    setCity(props.city)
    console.log(props)
  }
  return (
    
    <div className="App">
      <SearchLayout callback={api}/>
       
    </div>
  );
}

export default App;
