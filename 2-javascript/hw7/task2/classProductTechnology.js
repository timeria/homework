class ProductTechnology extends AbstractProduct {
  constructor(title, price, star, comment, battery, screen) {
    super(title, price, star, comment);
    this.battery = battery;
    this.screen = screen;
  }
}
