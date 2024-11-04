import { useState } from 'react'

function NewAnimalForm({ animals, setAnimals }) {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeImage = (event) => setImage(event.target.value)

    function formReset(){
        setName("")
        setImage("")
    }

    async function handleSubmit(event) {
        event.preventDefault()

        const newAnimal = {name, image, likes: 0}

        try{
        const response = await fetch('http://localhost:3000/animals', {
            method: 'POST',
            headers: { 'Content-Type':'application/json', 'Accept' : 'application/json' },
            body: JSON.stringify(newAnimal)
        })

        const data =  await response.json() 
        
        const updatedAnimals = [...animals, data]

        setAnimals(updatedAnimals)
        formReset()
    } catch (error){
        console.warn(error)
        alert("Something went wrong...")
    }
}

    return (
        <div className="form-container">

            <form className="new-item-form" onSubmit={handleSubmit}>

                <h2>Add A New Animal Here:</h2>

                <label htmlFor="name">Name: </label>
                <input required={true} 
                name="name" 
                onChange={handleChangeName} 
                value={name} />

                <br/>

                <label htmlFor="image">Image URL: </label>
                <input type="text" 
                required={true} 
                name="image" 
                onChange={handleChangeImage} 
                value={image} />

                <br/>

                <input type="submit" value="Create Animal" />

            </form>

        </div>
    )
}

export default NewAnimalForm