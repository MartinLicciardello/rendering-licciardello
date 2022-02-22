import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import { NavLink } from "react-router-dom";


const CartWidget = () => {
    const {persons} = useContext(CartContext)
  return (
   <> {persons.length > 0 && <NavLink activeClassName="active" to="/cart" className="Link">
CART      
    </NavLink>}</>
  )
}

export default CartWidget

//Esta fallando material UI creo o es un error mio, pero cuando lo importa me manda error y no se por que