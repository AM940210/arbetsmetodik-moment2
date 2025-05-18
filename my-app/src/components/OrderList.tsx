import React from 'react';
import { Order } from '../domain/Order';

interface Props {
  orders: Order[];
}

export const OrderList: React.FC<Props> = ({ orders }) => (
  <ul>
    {orders.map((order) => (
      <li key={order.id}>
        {order.product} x {order.quantity}
      </li>
    ))}
  </ul>
);
