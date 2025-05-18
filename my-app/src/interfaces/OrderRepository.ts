import { Order } from '../domain/Order';

export interface OrderRepository {
  save(order: Order): void;
  getAll(): Order[];
}
