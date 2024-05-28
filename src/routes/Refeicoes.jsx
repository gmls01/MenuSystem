import React, { useContext, useState } from 'react';
import { PedidoContext } from './PedidoContext';
import { Link } from "react-router-dom";
import icons from '../imgIcons/icons';

function Refeicoes() {
  const { adicionarItem } = useContext(PedidoContext);
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);
  const [contador4, setContador4] = useState(0);
  const [contador5, setContador5] = useState(0);
  const [contador6, setContador6] = useState(0);
  const [contador7, setContador7] = useState(0);
  const [contador8, setContador8] = useState(0);
  const [contador9, setContador9] = useState(0);
  const [contador10, setContador10] = useState(0);
  const [contador11, setContador11] = useState(0);
  const [contador12, setContador12] = useState(0);
  const [contador13, setContador13] = useState(0);
  const [contador14, setContador14] = useState(0);
  const [contador15, setContador15] = useState(0);
  const [contador16, setContador16] = useState(0);
  const [contador17, setContador17] = useState(0);
  const [contador18, setContador18] = useState(0);
  const [contador19, setContador19] = useState(0);
  const [contador20, setContador20] = useState(0);
  const [contador21, setContador21] = useState(0);
  const [contador22, setContador22] = useState(0);


  const somarUm = (contador, setContador) => {
    setContador(contador + 1);
  };

  const subtrairUm = (contador, setContador) => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const zerarContador = (setContador) => {
    setContador(0);
  };

  const adicionar1 = () => {
    if (contador1 > 0) {
      adicionarItem({ nome: "FILÉ DE FRANGO", preco: "24,00", quantidade: contador1 });
      zerarContador(setContador1);
    }
  };

  const adicionar2 = () => {
    if (contador2 > 0) {
      adicionarItem({ nome: "MINI CONTRA", preco: "27,00", quantidade: contador2 });
      zerarContador(setContador2);
    }
  };

  const adicionar3 = () => {
    if (contador3 > 0) {
      adicionarItem({ nome: "MINI CONTRA COM LEGUMES", preco: "29,00", quantidade: contador3 });
      zerarContador(setContador3);
    }
  };

  const adicionar4 = () => {
    if (contador4 > 0) {
      adicionarItem({ nome: "CALABRESA FRESCA", preco: "23,00", quantidade: contador4 });
      zerarContador(setContador4);
    }
  };

  const adicionar5 = () => {
    if (contador5 > 0) {
      adicionarItem({ nome: "CALABRESA DEFUMADA", preco: "23,00", quantidade: contador5 });
      zerarContador(setContador5);
    }
  };

  const adicionar6 = () => {
    if (contador6 > 0) {
      adicionarItem({ nome: "BISTECA COM FRITAS", preco: "23,00", quantidade: contador6 });
      zerarContador(setContador6);
    }
  };

  const adicionar7 = () => {
    if (contador7 > 0) {
      adicionarItem({ nome: "FRANGO ASSADO", preco: "24,00", quantidade: contador7 });
      zerarContador(setContador7);
    }
  };

  const adicionar8 = () => {
    if (contador8 > 0) {
      adicionarItem({ nome: "FILÉ DE FRANGO À MILANESA", preco: "32,00", quantidade: contador8 });
      zerarContador(setContador8);
    }
  };

  const adicionar9 = () => {
    if (contador9 > 0) {
      adicionarItem({ nome: "FILÉ DE FRANGO À PARMEGIANA", preco: "38,00", quantidade: contador9 });
      zerarContador(setContador9);
    }
  };

  const adicionar10 = () => {
    if (contador10 > 0) {
      adicionarItem({ nome: "BIFE À MILANESA", preco: "33,00", quantidade: contador10 });
      zerarContador(setContador10);
    }
  };

  const adicionar11 = () => {
    if (contador11 > 0) {
      adicionarItem({ nome: "BIFE À PARMEGIANA", preco: "38,00", quantidade: contador11 });
      zerarContador(setContador11);
    }
  };

  const adicionar12 = () => {
    if (contador12 > 0) {
      adicionarItem({ nome: "PICANHA À BRASILEIRA", preco: "52,00", quantidade: contador12 });
      zerarContador(setContador12);
    }
  };

  const adicionar13 = () => {
    if (contador13 > 0) {
      adicionarItem({ nome: "PUDIM DE LEITE CONDENSADO", preco: "9,00", quantidade: contador13 });
      zerarContador(setContador13);
    }
  };

  const adicionar14 = () => {
    if (contador14 > 0) {
      adicionarItem({ nome: "MOUSSE DE CHOCOLATE", preco: "10,00", quantidade: contador14 });
      zerarContador(setContador14);
    }
  };

  const adicionar15 = () => {
    if (contador15 > 0) {
      adicionarItem({ nome: "CHEESECAKE FRUTAS VERMELHAS", preco: "10,00", quantidade: contador15 });
      zerarContador(setContador15);
    }
  };

  const adicionar16 = () => {
    if (contador16 > 0) {
      adicionarItem({ nome: "TORTA HOLANDESA", preco: "10,00", quantidade: contador16 });
      zerarContador(setContador16);
    }
  };

  const adicionar17 = () => {
    if (contador17 > 0) {
      adicionarItem({ nome: "ÁGUA NATURAL", preco: "4,00", quantidade: contador17 });
      zerarContador(setContador17);
    }
  };

  const adicionar18 = () => {
    if (contador18 > 0) {
      adicionarItem({ nome: "ÁGUA COM GÁS", preco: "5,00", quantidade: contador18 });
      zerarContador(setContador18);
    }
  };

  const adicionar19 = () => {
    if (contador19 > 0) {
      adicionarItem({ nome: "ÁGUA 1,5L", preco: "7,00", quantidade: contador19 });
      zerarContador(setContador19);
    }
  };

  const adicionar20 = () => {
    if (contador20 > 0) {
      adicionarItem({ nome: "REFRIGERANTE LATA", preco: "7,00", quantidade: contador20 });
      zerarContador(setContador20);
    }
  };

  const adicionar21 = () => {
    if (contador21 > 0) {
      adicionarItem({ nome: "REFRIGERANTE 600M", preco: "10,00", quantidade: contador21 });
      zerarContador(setContador21);
    }
  };

  const adicionar22 = () => {
    if (contador22 > 0) {
      adicionarItem({ nome: "H2O", preco: "7,50", quantidade: contador22 });
      zerarContador(setContador22);
    }
  };


  // Função para trocar telas sem sair do arquivo
  const [objeto1, setObjeto1] = useState(true);
  const [objeto2, setObjeto2] = useState(false);
  const [objeto3, setObjeto3] = useState(false);


  const mostrarObjetoUm = () => {
    setObjeto1(true);
    setObjeto2(false);
    setObjeto3(false);
    setObjeto4(false);
  };

  const mostrarObjetoDois = () => {
    setObjeto1(false);
    setObjeto2(true);
    setObjeto3(false);
    setObjeto4(false);
  };

  const mostrarObjetoTres = () => {
    setObjeto1(false);
    setObjeto2(false);
    setObjeto3(true);
    setObjeto4(false);
  };



  return (
    <>
      {/*Cabeçalho (CSS está no arquivo Home.css)*/}
      <header>
        <nav className="navbar">
          <img src={icons.logo} alt="Logo" />
        </nav>
      </header>
      {/*Corpo/Principal*/}
      <main className="principal">
        <div className="principal-cima">
          <Link to="/"><img src={icons.icon9} alt="Voltar" className="seta" /></Link>
          <h1>REFEIÇÕES</h1>
          <Link to="/Finalizar"><img src={icons.icon8} alt="Menu" className="menu" /></Link>
        </div>

        <div className="barra-opcoes">
          <a className="opcao" onClick={mostrarObjetoUm}>PRINCIPAIS</a>
          <a className="opcao" onClick={mostrarObjetoDois}>SOBREMESAS</a>
          <a className="opcao" onClick={mostrarObjetoTres}>BEBIDAS</a>
        </div>

        <div className={objeto1 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>FILÉ DE FRANGO</p>
              <p>24,00</p>
            </div>
            <div className="box-main">
              <p>Filé de frango grelhado, acompanhado de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador1)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador1, setContador1)} className="button-remover">-</button>
                <span>{contador1}</span>
                <button onClick={() => somarUm(contador1, setContador1)} className="button-adicionar">+</button>
                <button onClick={adicionar1} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>MINI CONTRA</p>
              <p>27,00</p>
            </div>
            <div className="box-main">
              <p>Contra filé suculento, acompanhado de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador2)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador2, setContador2)} className="button-remover">-</button>
                <span>{contador2}</span>
                <button onClick={() => somarUm(contador2, setContador2)} className="button-adicionar">+</button>
                <button onClick={adicionar2} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>MINI CONTRA COM LEGUMES</p>
              <p>29,00</p>
            </div>
            <div className="box-main">
              <p>Contra filé suculento, acompanhado de arroz, feijão e legumes frescos.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador3)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador3, setContador3)} className="button-remover">-</button>
                <span>{contador3}</span>
                <button onClick={() => somarUm(contador3, setContador3)} className="button-adicionar">+</button>
                <button onClick={adicionar3} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>CALABRESA FRESCA</p>
              <p>23,00</p>
            </div>
            <div className="box-main">
              <p>Calabresa fresca grelhada, acompanhada de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador4)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador4, setContador4)} className="button-remover">-</button>
                <span>{contador4}</span>
                <button onClick={() => somarUm(contador4, setContador4)} className="button-adicionar">+</button>
                <button onClick={adicionar4} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>CALABRESA DEFUMADA</p>
              <p>23,00</p>
            </div>
            <div className="box-main">
              <p>Calabresa defumada, acompanhada de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador5)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador5, setContador5)} className="button-remover">-</button>
                <span>{contador5}</span>
                <button onClick={() => somarUm(contador5, setContador5)} className="button-adicionar">+</button>
                <button onClick={adicionar5} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>BISTECA COM FRITAS</p>
              <p>23,00</p>
            </div>
            <div className="box-main">
              <p>Bisteca suculenta, acompanhada de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador6)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador6, setContador6)} className="button-remover">-</button>
                <span>{contador6}</span>
                <button onClick={() => somarUm(contador6, setContador6)} className="button-adicionar">+</button>
                <button onClick={adicionar6} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>FRANGO ASSADO</p>
              <p>24,00</p>
            </div>
            <div className="box-main">
              <p>Frango assado no ponto certo, acompanhado de arroz, feijão e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador7)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador7, setContador7)} className="button-remover">-</button>
                <span>{contador7}</span>
                <button onClick={() => somarUm(contador7, setContador7)} className="button-adicionar">+</button>
                <button onClick={adicionar7} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>FILÉ DE FRANGO À MILANESA</p>
              <p>32,00</p>
            </div>
            <div className="box-main">
              <p>Filé de frango empanado e frito, servido com arroz, feijão, fritas e salada.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador8)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador8, setContador8)} className="button-remover">-</button>
                <span>{contador8}</span>
                <button onClick={() => somarUm(contador8, setContador8)} className="button-adicionar">+</button>
                <button onClick={adicionar8} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>FILÉ DE FRANGO À PARMEGIANA</p>
              <p>38,00</p>
            </div>
            <div className="box-main">
              <p>Filé de frango empanado, coberto com molho de tomate e queijo derretido, acompanhado de arroz, feijão, fritas e salada.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador9)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador9, setContador9)} className="button-remover">-</button>
                <span>{contador9}</span>
                <button onClick={() => somarUm(contador9, setContador9)} className="button-adicionar">+</button>
                <button onClick={adicionar9} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>BIFE À MILANESA</p>
              <p>33,00</p>
            </div>
            <div className="box-main">
              <p>Bife empanado e frito, servido com arroz, feijão, fritas e salada.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador10)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador10, setContador10)} className="button-remover">-</button>
                <span>{contador10}</span>
                <button onClick={() => somarUm(contador10, setContador10)} className="button-adicionar">+</button>
                <button onClick={adicionar10} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>BIFE À PARMEGIANA</p>
              <p>38,00</p>
            </div>
            <div className="box-main">
              <p>Bife empanado, coberto com molho de tomate e queijo derretido, acompanhado de arroz, feijão, fritas e salada.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador11)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador11, setContador11)} className="button-remover">-</button>
                <span>{contador11}</span>
                <button onClick={() => somarUm(contador11, setContador11)} className="button-adicionar">+</button>
                <button onClick={adicionar11} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>PICANHA À BRASILEIRA</p>
              <p>52,00</p>
            </div>
            <div className="box-main">
              <p>Picanha tradicional, acompanhada de arroz, feijão, vinagrete, salada e fritas.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador12)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador12, setContador12)} className="button-remover">-</button>
                <span>{contador12}</span>
                <button onClick={() => somarUm(contador12, setContador12)} className="button-adicionar">+</button>
                <button onClick={adicionar12} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div> 

        </div>

        <div className={objeto2 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>PUDIM DE LEITE CONDENSADO</p>
              <p>9,00</p>
            </div>
            <div className="box-main">
              <p>Tradicional pudim de leite condensado, com textura suave e sabor irresistível.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador13)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador13, setContador13)} className="button-remover">-</button>
                <span>{contador13}</span>
                <button onClick={() => somarUm(contador13, setContador13)} className="button-adicionar">+</button>
                <button onClick={adicionar13} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>MOUSSE DE CHOCOLATE</p>
              <p>10,00</p>
            </div>
            <div className="box-main">
              <p>Mousse de chocolate cremoso e aerado, perfeito para os amantes de chocolate.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador14)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador14, setContador14)} className="button-remover">-</button>
                <span>{contador14}</span>
                <button onClick={() => somarUm(contador14, setContador14)} className="button-adicionar">+</button>
                <button onClick={adicionar14} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>CHEESECAKE FRUTAS VERMELHAS</p>
              <p>10,00</p>
            </div>
            <div className="box-main">
              <p>Cheesecake clássico com cobertura de frutas vermelhas, uma combinação perfeita de sabores.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador15)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador15, setContador15)} className="button-remover">-</button>
                <span>{contador15}</span>
                <button onClick={() => somarUm(contador15, setContador15)} className="button-adicionar">+</button>
                <button onClick={adicionar15} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>TORTA HOLANDESA</p>
              <p>10,00</p>
            </div>
            <div className="box-main">
              <p>Deliciosa torta holandesa com base crocante, creme suave e cobertura de chocolate.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador16)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador16, setContador16)} className="button-remover">-</button>
                <span>{contador16}</span>
                <button onClick={() => somarUm(contador16, setContador16)} className="button-adicionar">+</button>
                <button onClick={adicionar16} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>
          
        </div>

        <div className={objeto3 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>ÁGUA NATURAL</p>
              <p>4,00</p>
            </div>
            <div className="box-main">
              <p>Água mineral natural, para refrescar e hidratar.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador17)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador17, setContador17)} className="button-remover">-</button>
                <span>{contador17}</span>
                <button onClick={() => somarUm(contador17, setContador17)} className="button-adicionar">+</button>
                <button onClick={adicionar17} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>ÁGUA COM GÁS</p>
              <p>5,00</p>
            </div>
            <div className="box-main">
              <p>Água mineral com gás, para quem prefere uma opção levemente gaseificada.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador18)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador18, setContador18)} className="button-remover">-</button>
                <span>{contador18}</span>
                <button onClick={() => somarUm(contador18, setContador18)} className="button-adicionar">+</button>
                <button onClick={adicionar18} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>ÁGUA 1,5L</p>
              <p>7,00</p>
            </div>
            <div className="box-main">
              <p>Garrafa de água mineral de 1,5 litro, ideal para compartilhar.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador19)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador19, setContador19)} className="button-remover">-</button>
                <span>{contador19}</span>
                <button onClick={() => somarUm(contador19, setContador19)} className="button-adicionar">+</button>
                <button onClick={adicionar19} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>REFRIGERANTE LATA</p>
              <p>7,00</p>
            </div>
            <div className="box-main">
              <p>Refrigerante em lata, disponível em diversos sabores.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador20)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador20, setContador20)} className="button-remover">-</button>
                <span>{contador20}</span>
                <button onClick={() => somarUm(contador20, setContador20)} className="button-adicionar">+</button>
                <button onClick={adicionar20} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>REFRIGERANTE 600ML</p>
              <p>10,00</p>
            </div>
            <div className="box-main">
              <p>Garrafa de refrigerante de 600ml, perfeita para matar a sede.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador21)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador21, setContador21)} className="button-remover">-</button>
                <span>{contador21}</span>
                <button onClick={() => somarUm(contador21, setContador21)} className="button-adicionar">+</button>
                <button onClick={adicionar21} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>H2O</p>
              <p>7,50</p>
            </div>
            <div className="box-main">
              <p>Água levemente gaseificada com sabor, uma opção refrescante e saborosa.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador22)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador22, setContador22)} className="button-remover">-</button>
                <span>{contador22}</span>
                <button onClick={() => somarUm(contador22, setContador22)} className="button-adicionar">+</button>
                <button onClick={adicionar22} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      {/*Rodapé*/}  
    <footer class="rodape">
      <div class="titulo-rodape">
        <h1>SAIBA MAIS</h1>
      </div>
    
      <div class="links-rodape">
        <img src={icons.icon4} alt="facebook" />
        <img src={icons.icon5} alt="instagram" />
        <img src={icons.icon6} alt="linkedIn" />
        <img src={icons.icon7} alt="X" />
      </div>
    </footer>
    </>
  );
}

export default Refeicoes;
