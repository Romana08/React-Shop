import React from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import ProductList from "../containers/ProductList";
// import Login from "./Login";

const Home = ()=>{
    return(
        <div>
            <Header/>

            <h1>Bienvenidxs</h1>
            <Link to="/Login"><botton>Ingesar</botton></Link>
            <ProductList/>
            
        </div>
    )
}
export default Home; 