export class Order {
  constructor(
    public readonly id: number,
    public readonly product: string,
    public readonly quantity: number
  ) {}

  isValid(): boolean {
    return this.product.trim() !== '' && this.quantity > 0;
  }
}
