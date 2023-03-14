const localDb = (name) => {
    let shopingCart = {};

    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart);
    }
    else {
        shopingCart = {};
    }

    const quantity = shopingCart[name];
    if (quantity) {
        const newQuantity = quantity + 1;
        shopingCart[name] = newQuantity;
    }
    else {
        shopingCart[name] = 1;
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart));
}




export { localDb };