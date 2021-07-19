import { useState } from "react";
import ImageForm from "./components/ImageForm"

function App() {

const [image, setImage]=useState({})
const [imageType, setImageType]=useState("pokemon")

const getSelect=(e)=>{  
  setImageType(e.target.value)
}


const consultarApi=()=>{
const data = fetch(`https://fakerapi.it/api/v1/images?_quantity=1&_type=${imageType}&_height=300`)
.then(data=>data.json())
.then(resultado=>setImage(resultado.data[0]))

}






  return (
    <div className="contenedor-principal">
      <ImageForm
      image={image}
      />

<select name="select">
  <option value="pokemon">Pokemons</option>
  <option value="animals" selected>Animals</option>
  <option value="architecture">Architecture</option>
  <option value="nature">Nature</option>
  <option value="people">People</option>
  <option value="tech">Tech</option>
  <option value="kittens">Kittens</option>
</select>



      <button onClick={consultarApi}>Consultar api</button>

    </div>
  );
}

export default App;
