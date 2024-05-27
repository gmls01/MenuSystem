import React, { useContext, useState } from 'react';
import { PedidoContext } from './PedidoContext';
import { Link } from "react-router-dom";
import icons from '../imgIcons/icons';

function Finalizar() {
  const { pedido } = useContext(PedidoContext);
  const [showPopup, setShowPopup] = useState(false);
  const [pedidoCancelado, setPedidoCancelado] = useState(false);

  // Função para cancelar o pedido
  const cancelarPedido = () => {
    setPedidoCancelado(true); // Define o estado para true ao cancelar o pedido
    setTimeout(() => {
      window.location.href = "/"; 
    }, 2000);
  };

  // Função para finalizar o pedido
  const finalizarPedido = () => {
    setShowPopup(true); // Exibir o pop-up de confirmação
    setTimeout(() => {
      window.location.href = "/"; 
    }, 2000);
  };

  return (
    <>
      {/*Cabeçalho*/}
      <header>
        <nav className="navbar">
          <img src={icons.logo} alt="Logo" />
        </nav>
      </header>

      <main className="principal-finalizar">
        <div className="principal-cima-finalizar">
          <Link to="/"><img src={icons.icon9} alt="Voltar" className="seta" /></Link>
          <h1>PEDIDO</h1>
        </div>

        <div className="barra-pedido">
          <p className="opcao">ITEM</p>
          <p className="opcao">QUANTIDADE</p>
          <p className="opcao">PREÇO</p>
        </div>

        <div className="pedido-lista">
          {pedido.map((item, index) => (
            <div key={index} className="pedido-item">
              <p>{item.nome}</p>
              <span>{item.quantidade}</span>
              <p>{item.preco}</p>
            </div>
          ))}
        </div>

        <div className='botoes-pedido'>
          <button className="button-cancelar" onClick={cancelarPedido}>CANCELAR</button>
          <button className="button-finalizar" onClick={finalizarPedido}>FINALIZAR</button>
        </div>

        {/* Pop-up de confirmação */}
        {showPopup && (
          <div className="popup">
            <p>Seu pedido foi realizado com sucesso!</p>
          </div>
        )}

        {/* Mensagem de pedido cancelado */}
        {pedidoCancelado && (
          <div className="popup-cancelado">
            <p>Seu pedido foi cancelado!</p>
          </div>
        )}
      </main>
    </>
  );
}

export default Finalizar;
