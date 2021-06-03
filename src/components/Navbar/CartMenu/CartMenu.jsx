import React from 'react'
import { IoMdClose } from 'react-icons/all'
import CartMenuSlider from './CartMenuSlider/CartMenuSlider'
import './cartmenu.scss'

const CartMenu = ({ cartMenuRef, toggleCartMenu, setCartItem, cartItem }) => {
	return (
		<div ref={cartMenuRef} className="cart-menu-container">
			<div onClick={toggleCartMenu} className="close-btn text-muted">
				<IoMdClose />
			</div>
			<div className="cart-menu-content text-center">
				<p className="heading mb-3">Review your cart</p>
				<p className="description text-muted mb-3">
					Your cart is currently empty
				</p>
				<button className="continue-shopping-btn mb-5">
					Continue shopping
				</button>
				<p className="extra-options-text">Add an extra option</p>
				<CartMenuSlider setCartItem={setCartItem} cartItem={cartItem} />
			</div>
		</div>
	)
}

export default CartMenu
