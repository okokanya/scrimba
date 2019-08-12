import React from 'react';
import '../App.css';


function ProdCompItem (props) {
  return (
    <div>
      <h1>{props.name}: </h1>
      <p>{props.price.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })}</p>
      <p>about this {props.name}: {props.description} </p>
    </div>
  );
}

export default ProdCompItem;
