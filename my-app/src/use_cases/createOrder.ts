import { OrderRepository } from '../interfaces/OrderRepository';
import { Order } from '../domain/Order';

export class CreateOrder {
  constructor(private repository: OrderRepository) {}

  execute(id: number, product: string, quantity: number): void {
    const order = new Order(id, product, quantity);
    if (!order.isValid()) {
      throw new Error('Ogiltig order');
    }
    this.repository.save(order);
  }
}
