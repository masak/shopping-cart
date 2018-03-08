import { expect } from 'chai';
import Cart from '../src/Cart';

describe('Cart', () => {

  it('can add things to a shopping cart', () => {
    const cart = new Cart();
    const product = {};
    cart.add(product);
  });

  it('it has a total of 0 when cart is empty', () => {
    const cart = new Cart();
    expect(cart.total()).to.be.equal(0);
  });

  it('reports a different total after add', () => {
    const cart = new Cart();
    const product = {
      price: 34,
    };
    cart.add(product);
    expect(cart.total()).to.be.equal(34);
  });

});
