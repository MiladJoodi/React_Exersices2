import { createContext , useState} from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider =(props)=>{
    const [cartItems , setCartItems] = useState([])

    const addToCart =(itemId)=>{
        if( !cartItems?.find((item)=> item.id === itemId))
        setCartItems([...cartItems , {id : itemId , count : 1}])
        else
        setCartItems(cartItems.map((item)=>{
            if( item.id=== itemId) 
             return {...item , count : item.count + 1}
            else return item
        }))
        console.log(cartItems)
    }

    const removeFromCart =(itemId) =>{
        setCartItems(cartItems.map ((i)=>{
            if(i.id ===itemId)
            return {...i , count : i.count ===0 ? 0: i.count - 1}
            else return i
        }))
    }
    const contextValue = {cartItems,addToCart , removeFromCart }
     return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

}