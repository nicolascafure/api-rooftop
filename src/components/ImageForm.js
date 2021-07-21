 import { useState } from "react"

 const ImageForm=()=>{

const [image, setImage]=useState({
  title:"",
  url: "",
  description:""

})
const [imageType, setImageType]=useState("pokemon")

    const getSelect=(e)=>{  
        setImageType(e.target.value)
        console.log(e.target.value)
      }
      
      
      const consultarApi=()=>{
      const data = fetch(`https://fakerapi.it/api/v1/images?_quantity=1&_type=${imageType}&_height=300`)
      .then(data=>data.json())
      .then(resultado=>setImage(resultado.data[0]))
      
      }
return(
  <div className= "contenedor-component">

    <div className="selectores-imagen"><select onChange={getSelect} name="select">
  <option selected value="pokemon">Pokemons</option>
  <option  value="animals" >Animals</option>
  <option value="architecture">Architecture</option>
  <option value="nature">Nature</option>
  <option value="people">People</option>
  <option value="tech">Tech</option>
  <option value="kittens">Kittens</option>
</select>

      <button onClick={consultarApi}>Consultar api</button></div>
      {image.title===""?null:<div className="contenedor-imagen">
<h1>{image.title}</h1>
<img src={image.url}></img>
<p>{image.description}</p>


</div>}
    
</div>
)

 }


 export default ImageForm