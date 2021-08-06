import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioContainer from "./components/PortfolioContainer";
import NavBar from "./components/NavBar";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (<BrowserRouter >
        <Header>
            <NavBar />
        </Header>
        <Switch>
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/' component={About} />
            <Route path='*' component={About} />
        </Switch>
        <Footer />
    </BrowserRouter>);
}

export default App;
