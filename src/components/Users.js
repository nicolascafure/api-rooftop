const Users = () => {

    const getUsers = ()=>{
fetch("https://fakerapi.it/api/v1/users?_quantity=1&_gender=male")
.then(data=>data.json())
.then(data=>console.log(data))

    }

    return ( 
<div className="contenedor-users">
<button onClick={getUsers}>getUsers</button>

    
</div>

     );
}
 
export default Users;