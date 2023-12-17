import { useState } from "react"

export const useCart = ()=>{
    const [cartItems, setCartItems] = useState();

    const addToCart = (itemId)=>{
        if(!cartItems?.find((item)=> item.id === itemId))
        setCartItems([...cartItems, {id: itemId, count: 1}])
        
        else
        setCartItems(cartItems.map((item)=>{
            if(item.id === itemId){
                return {...item, count: item.count+1}
            }
            else return item
        }))
    }
    const removeFromCart = (itemId)=>{
        setCartItems(cartItems.map((item)=>{
            if(item.id === itemId)
                return {...item, count: item.count === 0 ? 0 :  item.count-1}
            else return item
        }))
    }

    return {cartItems,addToCart, removeFromCart}
}