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

  it('knows to multiply total by quantity', () => {
    const cart = new Cart();
    const product = {
      price: 34,
    };
    cart.add(product, 5);
    expect(cart.total()).to.be.equal(170);
  });

  it('can give back all the products', () => {
    const cart = new Cart();
    const product = {
      price: 34,
    };
    cart.add(product);
    expect(JSON.stringify(cart.lineItems())).to.be.equal(JSON.stringify([{
      product: {
        price: 34,
      },
      qty: 1,
    }]));
  });

  it('can give back all the products', () => {
    const cart = new Cart();
    const product = {
      price: 34,
    };
    cart.add(product);
    const lineItems = cart.lineItems();
    lineItems.push({ price: 50 });
    expect(JSON.stringify(cart.lineItems())).to.be.equal(JSON.stringify([{
      product: {
        price: 34,
      },
      qty: 1,
    }]));
  });

});
