import React, { Fragment } from "react";

const Hit = ({ hit }) => {
  const { name, image, price } = hit;
  return (
    <Fragment>
      {image ? <img src={image.url} alt={name} /> : null}
      <p>{name}</p>
      <p>{price.formatted_with_code}</p>
      <button>Add To Cart</button>
    </Fragment>
  );
};

export default Hit;
