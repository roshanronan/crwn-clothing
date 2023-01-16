import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutPage = ()=>{
        navigate('/checkout')
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {
                cartItems.length
                ?cartItems.map((item)=> <CartItem cartItem={item} key={item.id}/>)
                :<h5>Your Cart is Empty.</h5>  
            }
            </div>
            <Button onClick={goToCheckoutPage}> Go To Checkout </Button>
        </div>
    )
}


export default CartDropdown;