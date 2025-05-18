import React, { useState } from 'react';

interface Props {
  onSubmit: (product: string, quantity: number) => void;
}

export const OrderForm: React.FC<Props> = ({ onSubmit }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product, quantity);
    setProduct('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Produkt"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Skapa Order</button>
    </form>
  );
};
