class Basket {
  constructor(products) {
    this.products = [];
  }
  addProduct(...args) {
    this.products.push(args);
  }
}
