//------------------------------ import libraries
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//------------------------------ import components
import LandingPage from "../pages/Pag--Landing";
import HomePage from "../pages/Pag--Home";
import UserPage from "../pages/Pag--User";
import RecipePage from "../pages/Pag--Recipe";
import CartPage from "../pages/Pag--Cart";

//------------------------------------ COMPONENT ------------------------------------//
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/walle" component={HomePage}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/usuario" component={UserPage}></Route>
        <Route exact path="/receta" component={RecipePage}></Route>
        <Route exact path="/carrito" component={CartPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;