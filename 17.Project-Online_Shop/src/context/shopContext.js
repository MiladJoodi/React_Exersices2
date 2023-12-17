import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        const data = localStorage.getItem("ProductsCart")
        setCartItems(JSON.parse(data) ? JSON.parse(data) : [])
    },[])

    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem("ProductsCart", JSON.stringify(cartItems))
    },[cartItems])

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

    const resetCart = ()=>{
        setCartItems();
        // localStorage.removeItem("ProductsCart")
        localStorage.clear()
    }

    const contextValue = {cartItems, addToCart, removeFromCart, resetCart}
        return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    
}