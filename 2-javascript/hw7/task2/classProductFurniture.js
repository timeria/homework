class ProductFurniture extends AbstractProduct {
  constructor(title, price, star, comment, width, height) {
    super(title, price, star, comment);
    this.width = width;
    this.height = height;
  }
}
