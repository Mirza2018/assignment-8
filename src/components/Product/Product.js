import React from 'react';
import { localDb } from '../Utilities/Storage';


const Product = (props) => {
    const{addToCart,product}=props;

    // const addToCart = (id) => {
    //     // return name;
    //    localDb(id);
    // }
    const { name, imag, price,id } = props.product;
    return (
        <div className='clo col-lg-3 m-1 bg-primary-subtle border border-4 rounded-3 border-info position-relative'>
            <h5 className='text-center'>{name}</h5>
            <center>
                <img className='w-75' src={imag} alt="" />
            </center>

            <p className='text-center pb-5'>price: ${price}</p>


            <button onClick={()=>addToCart(product)} className=' w-75 position-absolute bottom-0 shadow-lg rounded btn btn-warning'>AddTo cart <i className="fa-solid fa-cart-plus"></i></button>

        </div>
    );
};

export default Product;