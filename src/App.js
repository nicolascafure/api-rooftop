import { useState } from "react";


function App() {

const [image, setImage]=useState({})


const consultarApi=()=>{
const data = fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300")
.then(data=>data.json())
.then(resultado=>setImage(resultado.data[0]))

}





  return (
    <div className="contenedor-principal">
      
      <button onClick={consultarApi}>Consultar api</button>

    </div>
  );
}

export default App;
