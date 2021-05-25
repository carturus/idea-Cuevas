import{createContext,useState,useEffect} from 'react'
import React from 'react';
export const CartContext = createContext([])


export const CartProvider=({children})=>{

    const [cart,setCart]=useState([])
    const [cartQuantity,setCartQuantity]=useState(0)
    const [totalPrice,setTotalPrice]=useState(0)

    const  addToCart=(item,quantity)=>{
     
        let isDuplicado=cart.findIndex((itemCart)=>itemCart.id===item.id)
        if( isDuplicado>=0)
        {
            cart[isDuplicado].quantity=cart[isDuplicado].quantity+quantity
            setCartQuantity(cartQuantity+quantity)          
        } else{
            setCart([...cart,item])
            console.log('soy el cart en  cart contex',cart)
        }   
    }
    const removeFromCart=(itemId)=>{
        const newCart= cart.filter((item)=> item.id !==itemId)
        setCart(newCart)

    }

    const clearCart=()=>{
        setCart([])
    }

    useEffect(()=>{

        let contador=0;
        cart.forEach((item)=>{
           contador=contador+item.quantity;
        })      
        setCartQuantity(contador)    

    }, [cart] )


    useEffect(()=>{
        let price=0;

        cart.forEach((item)=>{
           price=price+item.quantity*item.price;
        })      
        setTotalPrice(price)    

    }, [cartQuantity] )
   

    return(
         <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart,cartQuantity,totalPrice}}> 
             {children}
         </CartContext.Provider >
    )
     
}