// PedidoContext.js
import React, { createContext, useState } from 'react';

export const PedidoContext = createContext();

export const PedidoProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);

  const adicionarItem = (item) => {
    setPedido([...pedido, item]);
  };

  return (
    <PedidoContext.Provider value={{ pedido, adicionarItem }}>
      {children}
    </PedidoContext.Provider>
  );
};
