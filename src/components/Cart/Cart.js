import React from 'react';

const Cart = ({ product }) => {


  return (
    <div>
      
      <p><img className='w-25' src={product.imag} alt={product.name} /> {product.name} </p>

    </div>
  );
};

export default Cart;