

function App() {

const consultarApi=()=>{
const data = fetch("https://fakerapi.it/api/v1/images?_quantity=1&_type=kittens&_height=300")
.then(data=>data.json())
.then(resultado=>console.log(resultado))



}

  return (
    <div className="contenedor-principal">
      
      <button onClick={consultarApi}>Consultar api</button>

    </div>
  );
}

export default App;
