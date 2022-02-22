import React, { useContext } from "react";
import { CartContext } from "../../CartContext";

const Cart = () => {
  const { persons, removeItem } = useContext(CartContext);

  if(persons.length == 0){
      return <p>No hay personajes seleccionados.</p>
  }
  function cantidadTotal() {
    let total = 0
    persons.map(p =>{
        total = total + p.quantity

    })
    return total
        
    }
  return (
    <div>
      {persons.map((person) => {
        return (
          <div>
            <h1>{person.name || `No tiene nombre, su id es ${person.id}`}</h1>
            <h3>Cantidad:{person.quantity}</h3>
            <button onClick={()=>removeItem(person.id)}>Eliminar del carrito </button>
          </div>
        );
      })}
      <p>Cantidad total: {cantidadTotal()}</p>
    </div>
  );
};

export default Cart;
