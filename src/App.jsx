import { useState, useEffect } from 'react'
import { getDog } from './api/getDog'
import { getCat } from './api/getCat'
import './App.css'

function App() {
  const [dog, setDog] = useState('')
  const [cat, setCat] = useState('')

  useEffect(() => {
    getDog().then((data) => setDog(data))
    getCat().then((data) => setCat(data))
  }, []);

  const handleDog = () => {
    getDog().then((data) => setDog(data))
  };

  const handleCat = () => {
    getCat().then((data) => setCat(data));
  };

  return (
    <>
      <figure>
        <img src={dog} alt="Random Dog" />
      </figure>
      <button onClick={handleDog}>New Random Dog</button>

      <figure>
        <img src={cat} alt="Random Cat" />
      </figure>
      <button onClick={handleCat}>New Random Cat</button>
    </>
  )
}

export default App
