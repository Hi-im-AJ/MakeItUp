import React from "react";

const Hit = ({ hit }) => {
  const { name, image, price } = hit;
  return (
    <div>
      {image ? <img src={image.url} alt={name} /> : null}
      <p>{name}</p>
      <p>{price.formatted_with_code}</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default Hit;
