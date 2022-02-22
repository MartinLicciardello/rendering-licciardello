import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);

  function isInCart(id) {
   return persons.some((person) => person.id === id);
  }

  function clear() {
    setPersons([]);
  }

  function addItem(person, quantity) {
    if (!isInCart(person.id)) {
      setPersons([...persons,{...person,quantity}])
    }
  }


  function removeItem(id){
      const newPersons = persons.filter((person) =>person.id !== id )
      setPersons(newPersons)
  }

  return (
    <CartContext.Provider value={{ persons, addItem,clear,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
