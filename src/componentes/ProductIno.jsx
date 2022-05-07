import React from "react";

const ProductInfo = () =>{
    return(
        <>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
        <div className="ProductInfo">
        <p>$35</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="primary-button add-to-cart-button">

        </button>
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
        Add to cart
        </div>
        
        </>
    )
}

export default ProductInfo;