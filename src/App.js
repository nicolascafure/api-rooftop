import { useState } from "react";
import ImageForm from "./components/ImageForm"

function App() {

const [image, setImage]=useState({})
const [imageType, setImageType]=useState("pokemon")
const [books, setBooks]=useState({})

const getSelect=(e)=>{  
  setImageType(e.target.value)
  console.log(e.target.value)
}


const consultarApi=()=>{
const data = fetch(`https://fakerapi.it/api/v1/images?_quantity=1&_type=${imageType}&_height=300`)
.then(data=>data.json())
.then(resultado=>console.log(resultado.data[0]))

}


const consultarApiLibros=()=>{
  const data = fetch("https://fakerapi.it/api/v1/books?_quantity=10")
  .then(data=>data.json())
  .then(resultado=>setImage(resultado.data[0]))
  
  }







  return (
    <div className="contenedor-principal">
      <ImageForm
      image={image}
      />

<select onChange={getSelect} name="select">
  <option selected value="pokemon">Pokemons</option>
  <option  value="animals" >Animals</option>
  <option value="architecture">Architecture</option>
  <option value="nature">Nature</option>
  <option value="people">People</option>
  <option value="tech">Tech</option>
  <option value="kittens">Kittens</option>
</select>

      <button onClick={consultarApi}>Consultar api</button>

      <button onClick={consultarApiLibros}>Consultar api libros</button>

    </div>
  );
}

export default App;
