import React from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Header from '../components/Header/Header';
import Contact from "../components/Contact/contact";
import Products from "../components/Products/Products";
import NotFound from "../components/Notfound/Notfound";
import ProductDetail from "../components/ProductDetail/ProduectDetail";
const AppRouter=()=>{
     
    return(
      
      <div>       
        
              <Router>
              
              <Header />
              <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/about' component={About} />
             <Route exact path='/contact' component={Contact} />
             <Route exact path='/products' component={Products} />
             <Route path="/products/:id" component={ProductDetail} />
             <Route   component={NotFound}/>
             </Switch>
          </Router>
          </div>
    )
  }
    export default AppRouter;