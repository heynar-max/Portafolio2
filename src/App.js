import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import BlogPage from "./pages/BlogPage";
import PortafolioPage from "./pages/PortafolioWeb";


function App() {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/portafolio" exact>
            <PortafolioPage/>
          </Route>
          <Route path="/blog" exact>
            <BlogPage/>
          </Route>
          <Route path="/contacto" exact>
            <Contacto/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
