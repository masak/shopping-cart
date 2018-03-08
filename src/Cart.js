class Cart {

  constructor() {
    this.totalSum = 0;
  }

  add(product, qty = 1) {
    this.totalSum += product.price * qty;
  }

  total() {
    return this.totalSum;
  }

}

export default Cart;
