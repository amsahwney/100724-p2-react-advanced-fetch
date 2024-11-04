import AnimalCard from "./AnimalCard"

function AnimalsContainer({ animals, setAnimals}) {

    const mappedAnimals = animals.map(a => <AnimalCard key={a.id} animal={a} setAnimals = {setAnimals} />)

    return (
    <div className="cards-container">

        { mappedAnimals }

    </div>
  )
}

export default AnimalsContainer