import { useState, useEffect } from 'react'
import { getDog } from '../api/getDog'
import { getCat } from '../api/getCat'
import '../styles/App.css'
import { AnimalCard } from './AnimalCard'

function App() {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    let promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(getDog().then((data) => ({ type: 'dog', url: data })));
      promises.push(getCat().then((data) => ({ type: 'cat', url: data })));
    }

    Promise.all(promises).then((newAnimals) => {
      setAnimals(newAnimals);
    });
  }, []);

  return (
    <>
      <h1>Random Animal</h1>
      <section>
        {animals ? animals.map((animal, index) => (
          <AnimalCard key={index} url={animal.url} type={animal.type} />
        )) : <p>Loading . . .</p>}
      </section>
    </>
  )
}

export default App
