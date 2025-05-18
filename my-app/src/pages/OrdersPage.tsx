import React, { useState } from 'react';
import { InMemoryOrderRepository } from '../infrastructure/InMemoryOrderRepository';
import { CreateOrder } from '../use_cases/createOrder';
import { OrderForm } from '../components/OrderForm';
import { OrderList } from '../components/OrderList';
import { Order } from '../domain/Order';

const repo = new InMemoryOrderRepository();
const createOrder = new CreateOrder(repo);

export const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleCreate = (product: string, quantity: number) => {
    const id = Date.now();
    try {
      createOrder.execute(id, product, quantity);
      setOrders([...repo.getAll()]);
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div>
      <h1>Orderhantering</h1>
      <OrderForm onSubmit={handleCreate} />
      <OrderList orders={orders} />
    </div>
  );
};
