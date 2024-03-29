import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../context/shopContext'

export function Nav() {

  const {cartItems} = useContext(ShopContext)
  const itemCount = cartItems?.reduce((prev,current)=>{
    return prev + current.count
  },0)


  return (
    <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className='container'>
        <a href="" className='navbar-brand'>Joodi</a>
        <ul className='navbar-nav '>
          <li className='nav-item'>
            <Link to="/" className='nav-link'>Shop</Link>
          </li>
          <li className='nav-item'>
            <Link to="/cart" className='nav-link'>
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && <span className='cart-items-count'>{itemCount}</span>}
              {/* <span className='cart-items-count'>{cartItems.length}</span> */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}