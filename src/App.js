
import ImageForm from "./components/ImageForm"
import Books from "./components/Books"
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from "./components/Menu";

function App() {


  return (
    <Router>
      <Menu/>
    <div className="contenedor-principal">
    <Switch>
          <Route path="/image-api">
          <ImageForm/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
        
            <Books/>
            </Route>
        </Switch>

      

      
   
    

    </div>
    </Router>
  );
}

export default App;
