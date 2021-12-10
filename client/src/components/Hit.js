import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NoImage from "../assets/noImage.png";

const Hit = ({ hit }) => {
  const { name, image, price, objectID } = hit;
  return (
    <Fragment>
      <Link to={"product/" + objectID} id={objectID} key={objectID}>
        {image ? <img src={image.url} alt={name} /> : <img src={NoImage} alt={name} />}
        <p>{name}</p>
        <p>{price.formatted_with_code}</p>
      </Link>
      <button className="btn">Add To Cart</button>
    </Fragment>
  );
};

export default Hit;
