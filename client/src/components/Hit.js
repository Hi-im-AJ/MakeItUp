import React from "react";
import { Link } from "react-router-dom";

const Hit = ({ hit }) => {
  const { name, image, price, objectID } = hit;
  return (
    <Link to={"product/" + objectID} id={objectID} key={objectID}>
      {image ? <img src={image.url} alt={name} /> : null}
      <p>{name}</p>
      <p>{price.formatted_with_code}</p>
      <button className="btn">Add To Cart</button>
    </Link>
  );
};

export default Hit;
