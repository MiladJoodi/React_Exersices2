import React, { useContext } from "react";
import { PRODUCTS } from "./data/products";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/Product";

function Cart() {

  const {cartItems} = useContext(ShopContext)

  return (
    <React.Fragment>
      <div>Your cart items</div>
      <div className="row">
        {PRODUCTS.map((product)=> {
            if(cartItems.some((item)=> item.id === product.id && item.count > 0)){
              return <Product data={product}  />
            }
        })}
      </div>
    </React.Fragment>
  );
}

export default Cart;
