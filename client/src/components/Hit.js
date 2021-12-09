import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Hit = ({ hit }) => {
  const { name, image, price, objectID } = hit;
  return (
    <Fragment>
      <Link to={"product/" + objectID} id={objectID} key={objectID}>
        {image ? <img src={image.url} alt={name} /> : null}
        <p>{name}</p>
        <p>{price.formatted_with_code}</p>
      </Link>
      <button className="btn">Add To Cart</button>
    </Fragment>
  );
};

export default Hit;
