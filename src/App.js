import React,{useState,useEffect} from "react";
import Dish from "./components/Dish";
import { useSelector} from "react-redux";
import Pagination from "./components/Pagination"
import styles from "../src/App.css"
import Home from "./components/Home";
import Testing from "./components/testing";
import { Warehouse } from "./components/warehouse";
import { ContextProvider } from "./context";

import {

  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";




const App=()=>{
  


 return(
   <>
  <div className="warehouse-wrapper">
  <div className="center">
    <div className="heading" style={{margin:"1rem"}}>
  <h3>Warehouse finder</h3>
  </div>
 <ContextProvider>
   <BrowserRouter>
   <Switch>
    <div className="main-app">
    <Route exact path='/'>
    	<Home/>
    	</Route>
      <Route path='/warehouse/:name'>
    		<Testing/>
    	</Route>
       
    </div>
    </Switch>
   </BrowserRouter>
   </ContextProvider>
   </div>
   </div>
   </>
 
  )
}

export default App
