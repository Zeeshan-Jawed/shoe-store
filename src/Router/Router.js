import React from "react";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Header from '../components/Header/Header';
const AppRouter=()=>{
     
    return(
      
      <div>       
        
              <Router>
              <Header />
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
          </Router>
          </div>
    )
  }
    export default AppRouter;