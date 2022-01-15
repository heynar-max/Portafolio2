import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import PortafolioWeb from "./pages/PortafolioWeb";
import Sobre from "./pages/Sobre";


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/sobre" exact>
            <Sobre/>
          </Route>
          <Route path="/portafolio" exact>
            <Portafolio/>
          </Route>
          <Route path="/portafolioweb" exact>
            <PortafolioWeb/>
          </Route>
          <Route path="/contacto" exact>
            <Contacto/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
