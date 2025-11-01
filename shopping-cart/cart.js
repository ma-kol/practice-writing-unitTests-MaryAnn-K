// addItem(cart, item, quantity): Adds an item to the cart.
// removeItem(cart, item): Removes an item from the cart.
// getTotalItems(cart): Returns the total number of items in the cart.

let cart = [];

function addItem(cart, item, quantity) {
    cart.push({ item, quantity });
    return cart;
}

function removeItem(cart, item) {
    const index = cart.findIndex(cartItem => cartItem.item === item);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function getTotalItems(cart) {
    return cart.reduce(
        (total, cartItem) => total + cartItem.quantity, 0
    );
}

module.exports = {
    addItem,
    removeItem,
    getTotalItems
}