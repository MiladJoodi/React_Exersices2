import { useState } from "react"

export const useCart = ()=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId)=>{
        setCartItems([...cartItems, {id: itemId, count: 1}])
    } 
    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.id === itemId){
                return {...item, count: item.count-1}
            }else{
                return item
            }
        }))
    } 

    return {cartItems,addToCart, removeFromCart}
}