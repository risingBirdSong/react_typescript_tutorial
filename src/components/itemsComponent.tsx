import React from "react";
import products from "../data/itemsdata";

interface ProductI {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductComponent = ({ props }: { props: ProductI }) => {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export { ProductComponent };
