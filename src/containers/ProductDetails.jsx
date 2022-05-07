import React from "react";
import ProductInfo from "../componentes/ProductIno";

const ProductDetails = () =>{
    return(
        <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="./icons/icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
    )
}
export default ProductDetails;