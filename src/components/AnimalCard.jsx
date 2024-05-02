import { useState } from 'react';
import { getCat } from '../api/getCat';
import { getDog } from '../api/getDog';
import '../styles/AnimalCard.css';

// eslint-disable-next-line react/prop-types
export function AnimalCard({ url, type }) {
    const [animal, setAnimal] = useState(url)

    const handleAnimal = () => {
        if (type === 'dog') {
            getDog().then((data) => setAnimal(data))
        } else {
            getCat().then((data) => setAnimal(data))
        }
    }

    return (
        <article>
            <figure>
                <img src={animal} alt="Random Animal" />
            </figure>
            <button onClick={handleAnimal}>New Random Animal</button>
        </article>
    )
}