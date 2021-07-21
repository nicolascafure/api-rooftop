import { useState } from "react"

const Users = () => {
const [users, setUsers] = useState([])
    const getUsers = ()=>{
fetch("https://fakerapi.it/api/v1/users?_quantity=10&_gender=male")
.then(data=>data.json())
.then(data=>setUsers(data.data))

    }

    return ( 
        <div className= "contenedor-component">
            <button onClick={getUsers}>getUsers</button>
{users.length===0?null:<div className="contenedor-users">
<div className="user">
<div className="user-data head">User Name</div>
<div className="user-data head">First Name</div>
<div className="user-data head">Last Name</div>
<div className="user-data head email">Email</div>
</div>

{users.map(user=><div key={user.uuid} className="user">
<div className="user-data"><img className="img-user" src={user.image}></img>{user.username}</div>
<div className="user-data">{user.firstname}</div>
<div className="user-data">{user.lastname}</div>
<div className="user-data email">{user.email}</div>



</div>)}

    
</div>}

</div>

     );
}
 
export default Users;