import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';



const CheckoutItem = ({item})=>{

    const {id,name,imageUrl,quantity,price} = item
    const { cartItems,removeItemFromCart } = useContext(CartContext)

    const addProduct = (cartItem) =>{
        
    }

    const removeProduct = (cartItem) =>{
        removeItemFromCart(cartItem)
    }

    return(
        <div className='checkout-item-container' key={id}>
        <img src={imageUrl} alt={name} />
        <span>{name}</span>
        <span> 
        <button onClick={removeProduct()}>- </button>
          {quantity} 
         <button> +</button>
        </span>
        <span>₹{price}</span>
        <span>X</span>
        </div>
    )
}


export default CheckoutItem;