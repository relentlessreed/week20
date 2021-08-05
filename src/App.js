import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import PortfolioContainer from "./components/PortfolioContainer";
import NavBar from "./components/NavBar";
import Resume from "./pages/Resume";

const App = () => {
    return (<BrowserRouter >
        <NavBar />
        <Switch>
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/' component={About} />
            <Route path='*' component={About} />
        </Switch>
    </BrowserRouter>);
}

export default App;
