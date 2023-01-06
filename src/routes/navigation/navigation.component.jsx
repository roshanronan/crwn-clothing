
import { Fragment,useContext } from "react";
import { Outlet,Link } from "react-router-dom"

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Crwn } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import './navigationg.styles.scss'


const Navigation = () =>{
    
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    const signOutHandler = async() =>{
        await signOutUser()
    }   
 
    return(
        <Fragment>
          <div className="navigation">
            <Link className="logo-container" to='/'>
                <Crwn/>
            </Link>

            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link" to='/shop'>
                    Contact
                </Link>
                {currentUser?
                (<span className="nav-link" onClick={signOutHandler} >
                      Sign Out
                </span>):(<Link className="nav-link" to='/auth'>
                            Sign In
                        </Link>)}
                <CartIcon />
              
            </div>
                    {isCartOpen && <CartDropdown />}
         </div>
         <Outlet/>
        
        </Fragment>
      
    )
  }

  export default Navigation;