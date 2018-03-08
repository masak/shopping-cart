class Cart {

  constructor() {
    this.items = [];
  }

  add(product, qty = 1) {
    this.items.push({ product, qty });
  }

  total() {
    return this.items.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
  }

  lineItems() {
    return [...this.items];
  }

}

export default Cart;
