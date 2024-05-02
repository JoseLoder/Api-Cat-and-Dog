const URL = 'https://dog.ceo/api/breeds/image/random'

export const getDog = async () => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        return data.message
    } catch (error) {
        console.error('Error en la función getDog: ' + error);
    }

}

