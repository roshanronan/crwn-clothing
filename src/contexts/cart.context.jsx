import { createContext ,useEffect,useState} from "react";


export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    totalCartItem:0,
    removeItemFromCart:()=>{}
})

export const addToCart = (cartItems,productToAdd)=>{

    let itemExist = cartItems.find((item)=>{
        return item.id === productToAdd.id
    })
    if(itemExist){
      return cartItems.map(
        item=>item.id === itemExist.id
        ?{...item,quantity:item.quantity+1}
        :item)
    }
    return [...cartItems,{...productToAdd,quantity:1}]
}

export const removeFromCart =(cartItems,productToRemove)=>{
    const productExist = cartItems.find(
        (product) => product.id === productToRemove.id
    )

    if(productExist.quantity === 1 ){
       return cartItems.filter(product=>product.id !== productExist.id)
    }
       
    return cartItems.map(
        product => 
        product.id === productExist.id
        ?{...product,quantity:product.quantity-1}
        :product)
    
}

export const CartProvider =({children})=>{
    const[isCartOpen,setIsCartOpen] = useState(null)
    const[cartItems,setCartItems]=  useState([])
    const[totalCartItem,setTotalCartItem]= useState(0)
    const addItemToCart = (productToAdd)=>{
        setCartItems(addToCart(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove)=>{
        setCartItems(removeFromCart(cartItems,productToRemove))
    }

    // const decreaseItemFromCart = (itemToDecrease) =>{
    //     console.log("dd",itemToDecrease)
    //     let itemExit = cartItems.find(item => item.id === itemToDecrease.id)

    //     if(itemExit){

           
    //         return cartItems.map(
    //             (cartItem)=>{
    //                 console.log("item",cartItem)
    //                 return(
    //                     cartItem.id === itemExit.id
    //                 ?{...cartItem,quantity:cartItem.quantity-1}
    //                 : cartItem
    //                 )
    //             }
    //         )
    //     }
    // }

    useEffect(()=>{
        setTotalCartItem( cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0))
    },[cartItems])

    const value ={isCartOpen,setIsCartOpen,cartItems,addItemToCart,totalCartItem,removeItemFromCart}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}