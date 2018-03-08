// import { expect } from 'chai';
import Cart from '../src/Cart';

describe('Cart', () => {

  it('can add things to a shopping cart', () => {
    const cart = new Cart();
    const product = {};
    cart.add(product);
  });

});
