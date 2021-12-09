import React from 'react';

const CartItem = ({name, quantity, line_total }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{line_total}</p>
        </div>
    );
}

export default CartItem;


