import { useState } from "react"

const Users = () => {
const [users, setUsers] = useState([])
    const getUsers = ()=>{
fetch("https://fakerapi.it/api/v1/users?_quantity=10&_gender=male")
.then(data=>data.json())
.then(data=>setUsers(data.data))

    }

    return ( 
<div className="contenedor-users">
<button onClick={getUsers}>getUsers</button>

{users.map(user=><div key={user.uuid} className="user">
<p className="user-data">{user.username}</p>
<p className="user-data">{user.firstname}</p>
<p className="user-data">{user.lastname}</p>
<p className="user-data">{user.email}</p>
<p className="user-data">{user.website}</p>


</div>)}

    
</div>

     );
}
 
export default Users;