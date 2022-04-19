import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import NotFound from "../pages/Notound";
import MyOrder from "../containers/MyOrder";
import ProductDetails from "../containers/ProductDetails";
import '../styles/global.css';
import '../styles/Login.scss';
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import CheckOut from "../pages/CkeckOut";

const App = ()=>{
    return(
        <BrowserRouter>
	<Layout>
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/login" element={<Login />} />		
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
			<Route exact path="/send-email" element={< SendEmail/>} />		
			<Route exact path="/new-password" element={<NewPassword/>} />		
			<Route exact path="/account" element={< MyAccount/>} />		
			<Route exact path="/signup" element={< CreateAccount/>} />		
			<Route exact path="/checkout" element={< CheckOut/>} />		

			
			<Route exact path="/orders" element={<MyOrder />} />
			<Route exact path="/details" element={<ProductDetails />} />		
		
			<Route path="*" element={<NotFound />} />
		</Routes>
	</Layout>
</BrowserRouter> 
    )
}
export default App; 