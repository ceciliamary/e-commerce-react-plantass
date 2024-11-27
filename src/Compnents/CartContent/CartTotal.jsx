import { useContext, useState, useEffect } from "react"
import { Context } from "../../Context/Context"


const CartTotal = () => {
    const {cart} = useContext(Context)

    const total = cart.reduce ((acc, el) => acc + el.price * el.quanty, 0)
  return (
    <div className="CartTotal">
      <h3>Total a pagar: {total}</h3>
    </div>
  )
}

export default CartTotal
