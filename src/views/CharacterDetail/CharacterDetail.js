import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./CharacterDetail.css";
import ItemCount from "../../components/CharacterCard/ItemCount";
import { CartContext } from "../../CartContext";



const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {addItem} = useContext(CartContext)



  const [showControls, setShowControls] = useState(false);

  let id = useParams();

  let userID = id.id;

  useEffect(() => {
    axios(`https://api.github.com/users/${userID}`).then((res) =>
      setCharacter(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [userID]);

  function onAdd(quantity) {
    setShowControls(true);
    addItem(character,quantity)
  }

  return (
    <div className="productDetail">
      {isLoading ? (
        <p>Aguarde unos segundos</p>
      ) : (
        <>
          <CharacterCard data={character} />{" "}
          {!showControls ? (
            <ItemCount onAdd={onAdd} />
          ) : (
            <>
              <Link to="/">Seguir comprando</Link>
              <Link to="/cart">Finalizar compra</Link>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
