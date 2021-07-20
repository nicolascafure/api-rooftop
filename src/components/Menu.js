import React from 'react';
import {Link} from "react-router-dom"

const Menu = () => {
    return (<> <div className="contenedor-nav"><div className="logo-top"><img src="https://rooftop.dev/images/rooftop-logo.webp" alt=""></img></div>
         <nav>      
         <Link to="/">Books</Link>
         <Link to="/users">Users</Link>
         <Link to="/image-api">Images</Link>
       </nav></div>
       </>)
}
 
export default Menu;
