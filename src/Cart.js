class Cart {

  constructor() {
    this.totalSum = 0;
  }

  add(product) {
    this.totalSum += product.price;
  }

  total() {
    return this.totalSum;
  }

}

export default Cart;
