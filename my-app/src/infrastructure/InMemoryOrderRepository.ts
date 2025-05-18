import { OrderRepository } from '../interfaces/OrderRepository';
import { Order } from '../domain/Order';

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];

  save(order: Order): void {
    this.orders.push(order);
  }

  getAll(): Order[] {
    return this.orders;
  }
}
