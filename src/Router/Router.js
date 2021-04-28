import React from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Header from '../components/Header/Header';
import Contact from "../components/Contact/contact";
const AppRouter=()=>{
     
    return(
      
      <div>       
        
              <Router>
              <Header />
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/contact' component={Contact} />
          </Router>
          </div>
    )
  }
    export default AppRouter;