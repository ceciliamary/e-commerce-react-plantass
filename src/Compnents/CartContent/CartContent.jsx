import Navbar from "../Navbar/Navbar"
import CartElements from "./CartElements"
import CartTotal from "./Carttotal"

import './CartContent.css'
import { useContext } from "react"
import { Context } from "../../Context/Context"

const CartContent = () => {
  const {cart} = useContext(Context) 
  return (
    <>
    <Navbar />
    {cart.length > 0 ? (
      <>
    <CartElements />
    <CartTotal />
    </>
  ) : (
    <h2 className="cart-message-center">Su carrito esta vacio</h2>
  )}
 </>
  )
}

export default CartContent
