import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { alert1, localDb } from '../Utilities/Storage';

const Products = () => {
    
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const getCart = localStorage.getItem('shoping-cart');
        let storedCart = {};
        if (getCart) {
            storedCart = JSON.parse(getCart);

            // console.log(storedCart);
        }
        let myCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id == id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                myCart.push(addedProduct);
            }
        }
        setCart(myCart)

    }, [products])


    const addToCart = (product) => {

        let newCart = [];

        const exists = cart.find(pro1 => product.id == pro1.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(pro1 => product.id != pro1.id);
            exists.quantity++;
            newCart = [...rest, exists]
        }
        console.log(newCart);
        if (newCart.length > 4) {
            alert("You can't select more than four")

            return;
        }
        setCart(newCart)
        // return name;
        localDb(product.id)
    }

    const [showProduct, setShoeProduct] = useState([])
    const choose = () => {
        let newCart = [];
        newCart = [...cart];
        const finalProduct = Math.floor(Math.random() * 4);

        let displayThis = newCart[finalProduct]
        setShoeProduct(displayThis)
    }

    const removeAll = () => {
        localStorage.removeItem('shoping-cart')
        window.location.reload()
    }
    return (
        <div className='row'>
            <div className='col col-lg-10'>
                {/* see products  */}
                <div className='row'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                        >

                        </Product>)
                    }
                </div>
            </div>

            <div className='col col-lg-2 text-center p-2'>
                <h4>
                    Selected Products
                </h4>
                {
                    cart.map(product => <Cart
                        product={product}
                        key={product.id}
                    ></Cart>)
                }
                <button onClick={() => choose()} className='p-1 m-2 btn btn-success'>Choose one for me</button>
                <p><img className='w-25' src={showProduct.imag} alt="" />
                    {showProduct.name}</p>

                <button onClick={() => removeAll()} className='p-1 m-2 btn btn-info'>Choose Again</button>
            </div>
        </div>
    );
};

export default Products;