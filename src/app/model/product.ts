export class Product {
  constructor(
    public title: string,
    public description: string,
    public photo: string,
    public price: number,
    public stock: number) {
  }

  isLast(): boolean {
    return this.stock === 1;
  }

  isInStock(): boolean {
    return this.stock > 0;
  }
}
