import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { OrdersPage } from './pages/OrdersPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
