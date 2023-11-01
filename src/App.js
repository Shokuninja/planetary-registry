import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useState, useEffect } from 'react'

function App() {

  const [planets, setPlanets] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:8085/planets')
    .then(response => response.json())
    .then(planetsData => {
      setPlanets(planetsData)
    })
  }, [])

  function addPlanet(event) {
    event.preventDefault()

    fetch('http://127.0.0.1:8085/planets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newPlanet => setPlanets([...planets, newPlanet]))
    
  }

  function updateFormData(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app-container">
      <Header />
      <Registry planets={planets} updateFormData={updateFormData} addPlanet={addPlanet} />
    </div>
  );
}

export default App;
