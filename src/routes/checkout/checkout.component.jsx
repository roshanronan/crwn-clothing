import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ()=>{
    const {cartItems,addItemToCart,removeItemFromCart} = useContext(CartContext)


    // const increaseQantity = (product) =>{
    //     addItemToCart(product)
    // }

    return(
       <div className='checkout-container'>
       {
        cartItems.map((cartItem)=>{
            const {id,name,quantity}=cartItem
            return(
                <div key={id}>
                <h2 >{name}</h2>
                <span>{quantity}</span>
                <h2 onClick={()=>addItemToCart(cartItem)}> + </h2>
                <h2 onClick={()=>removeItemFromCart(cartItem)}> - </h2>
                </div>
            )
        })
       }
       </div>
    )

}

export default Checkout;