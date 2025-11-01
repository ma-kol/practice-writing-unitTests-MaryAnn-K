// Create a tests folder and add a file named cart.test.js.
// Write tests for each method in the cart.js module, covering:
// Positive Tests: Valid inputs producing expected results.
// Negative Tests: Invalid inputs handled gracefully.
// Edge Cases: Unusual or extreme values.
// describe: Groups related tests into a test suite.
// test: Defines individual test cases.
// expect: States the expected result.
// toBe: Compares the actual and expected values.

const { addItem, removeItem, getTotalItems } = require('shopping-cart/cart.js');

let cart;

//reset cart before each test

beforeEach(() => {
    cart = [];
});

// addItem Tests

describe("addItem", function () {
    test("Should return a new item with name and quantity", function () {
        addItem(cart, "peach", 2);
        expect(getTotalItems(cart)).toBe(2);
    });
});

// removeItem Tests

describe("removeItem", function () {
    test("Should remove items from the cart", function () {
        addItem(cart, "apricot", 1);
        removeItem(cart, "apricot");
        expect(cart).toStrictEqual([]);
    });
});

// getTotalItems Tests

describe("getTotalItems", function () {
    test("Should add total quantities of items to the cart", function () {
        addItem(cart, "papaya", 1);
        addItem(cart, "orange", 3);
        expect(getTotalItems(cart)).toBe(4);
    });
});


