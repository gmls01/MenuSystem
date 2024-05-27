import React, { useContext, useState } from 'react';
import { PedidoContext } from './PedidoContext';
import { Link } from "react-router-dom";
import icons from '../imgIcons/icons';

function Matinal() {
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
      adicionarItem({ nome: "PÃO COM MANTEIGA", preco: "4,00", quantidade: contador1 });
      zerarContador(setContador1);
    }
  };

  const adicionar2 = () => {
    if (contador2 > 0) {
      adicionarItem({ nome: "PÃO COM REQUEIJÃO", preco: "6,00", quantidade: contador2 });
      zerarContador(setContador2);
    }
  };

  const adicionar3 = () => {
    if (contador3 > 0) {
      adicionarItem({ nome: "PÃO COM OVO", preco: "8,00", quantidade: contador3 });
      zerarContador(setContador3);
    }
  };

  const adicionar4 = () => {
    if (contador4 > 0) {
      adicionarItem({ nome: "PÃO DE QUEIJO", preco: "5,50", quantidade: contador4 });
      zerarContador(setContador4);
    }
  };

  const adicionar5 = () => {
    if (contador5 > 0) {
      adicionarItem({ nome: "BOLINHO DE CARNE", preco: "6,00", quantidade: contador5 });
      zerarContador(setContador5);
    }
  };

  const adicionar6 = () => {
    if (contador6 > 0) {
      adicionarItem({ nome: "COXINHA", preco: "6,00", quantidade: contador6 });
      zerarContador(setContador6);
    }
  };

  const adicionar7 = () => {
    if (contador7 > 0) {
      adicionarItem({ nome: "PÃO DE BATATA", preco: "6,50", quantidade: contador7 });
      zerarContador(setContador7);
    }
  };

  const adicionar8 = () => {
    if (contador8 > 0) {
      adicionarItem({ nome: "CROISSANT", preco: "7,00", quantidade: contador8 });
      zerarContador(setContador8);
    }
  };

  const adicionar9 = () => {
    if (contador9 > 0) {
      adicionarItem({ nome: "TAPIOCA MANTEIGA", preco: "9,00", quantidade: contador9 });
      zerarContador(setContador9);
    }
  };

  const adicionar10 = () => {
    if (contador10 > 0) {
      adicionarItem({ nome: "TAPIOCA OVO MEXIDO", preco: "12,00", quantidade: contador10 });
      zerarContador(setContador10);
    }
  };

  const adicionar11 = () => {
    if (contador11 > 0) {
      adicionarItem({ nome: "TAPIOCA PRESUNTO E QUEIJO", preco: "14,00", quantidade: contador11 });
      zerarContador(setContador11);
    }
  };

  const adicionar12 = () => {
    if (contador12 > 0) {
      adicionarItem({ nome: "TAPIOCA FRANGO COM CATUPIRY", preco: "18,00", quantidade: contador12 });
      zerarContador(setContador12);
    }
  };

  const adicionar13 = () => {
    if (contador13 > 0) {
      adicionarItem({ nome: "TAPIOCA CARNE SECA COM CATUPIRY", preco: "18,00", quantidade: contador13 });
      zerarContador(setContador13);
    }
  };

  const adicionar14 = () => {
    if (contador14 > 0) {
      adicionarItem({ nome: "TAPIOCA COCO COM LEITE CONDENSADO", preco: "14,00", quantidade: contador14 });
      zerarContador(setContador14);
    }
  };

  const adicionar15 = () => {
    if (contador15 > 0) {
      adicionarItem({ nome: "TAPIOCA NUTELLA", preco: "15,00", quantidade: contador15 });
      zerarContador(setContador15);
    }
  };

  const adicionar16 = () => {
    if (contador16 > 0) {
      adicionarItem({ nome: "PÃO COM MANTEIGA", preco: "4,00", quantidade: contador16 });
      zerarContador(setContador16);
    }
  };

  const adicionar17 = () => {
    if (contador17 > 0) {
      adicionarItem({ nome: "PÃO COM REQUEIJÃO", preco: "6,00", quantidade: contador17 });
      zerarContador(setContador17);
    }
  };

  const adicionar18 = () => {
    if (contador18 > 0) {
      adicionarItem({ nome: "PÃO COM OVO", preco: "8,00", quantidade: contador18 });
      zerarContador(setContador18);
    }
  };

  const adicionar19 = () => {
    if (contador19 > 0) {
      adicionarItem({ nome: "PÃO DE QUEIJO", preco: "5,50", quantidade: contador19 });
      zerarContador(setContador19);
    }
  };

  const adicionar20 = () => {
    if (contador20 > 0) {
      adicionarItem({ nome: "BOLINHO DE CARNE", preco: "6,00", quantidade: contador20 });
      zerarContador(setContador20);
    }
  };

  const adicionar21 = () => {
    if (contador21 > 0) {
      adicionarItem({ nome: "COXINHA", preco: "6,00", quantidade: contador21 });
      zerarContador(setContador21);
    }
  };

  const adicionar22 = () => {
    if (contador22 > 0) {
      adicionarItem({ nome: "PÃO DE BATATA", preco: "6,50", quantidade: contador22 });
      zerarContador(setContador22);
    }
  };

  // Função para trocar telas sem sair do arquivo
  const [objeto1, setObjeto1] = useState(true);
  const [objeto2, setObjeto2] = useState(false);
  const [objeto3, setObjeto3] = useState(false);
  const [objeto4, setObjeto4] = useState(false);

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

  const mostrarObjetoQuatro = () => {
    setObjeto1(false);
    setObjeto2(false);
    setObjeto3(false);
    setObjeto4(true);
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
          <h1>MATINAL</h1>
          <Link to="/Finalizar"><img src={icons.icon8} alt="Menu" className="menu" /></Link>
        </div>

        <div className="barra-opcoes">
          <a className="opcao" onClick={mostrarObjetoUm}>PÃES</a>
          <a className="opcao" onClick={mostrarObjetoDois}>SALGADOS</a>
          <a className="opcao" onClick={mostrarObjetoTres}>TAPIOCA</a>
          <a className="opcao" onClick={mostrarObjetoQuatro}>BEBIDAS</a>
        </div>

        <div className={objeto1 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>PÃO COM MANTEIGA</p>
              <p>4,00</p>
            </div>
            <div className="box-main">
              <p>Pão branco tostado com uma camada de manteiga cremosa derretida, um sabor rico e suave.</p>
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
              <p>PÃO COM REQUEIJÃO</p>
              <p>6,00</p>
            </div>
            <div className="box-main">
              <p>Pão branco coberto com requeijão cremoso com textura suave.</p>
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
              <p>PÃO COM OVO</p>
              <p>8,00</p>
            </div>
            <div className="box-main">
              <p>Pão branco torrado acompanhado de um ovo frito ou cozido, criando uma combinação clássica.</p>
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
              <p>PÃO DE QUEIJO</p>
              <p>5,50</p>
            </div>
            <div className="box-main">
              <p>Crocantes por fora e macios por dentro, feitos com polvilho e queijo, ideais para qualquer hora do dia.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador4)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador4, setContador4)} className="button-remover">-</button>
                <span>{contador4}</span>
                <button onClick={() => somarUm(contador4, setContador4)} className="button-adicionar">+</button>
                <button onClick={adicionar4} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>
        </div>

        <div className={objeto2 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>BOLINHO DE CARNE</p>
              <p>6,00</p>
            </div>
            <div className="box-main">
              <p>Bolinhos fritos com recheio de carne moída, crocantes por fora e suculentos por dentro.</p>
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
              <p>COXINHA</p>
              <p>6,00</p>
            </div>
            <div className="box-main">
              <p>Salgadinho frito em formato de gota, recheado com frango desfiado, com uma massa macia por dentro e crocante por fora.</p>
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
              <p>PÃO DE BATATA</p>
              <p>6,50</p>
            </div>
            <div className="box-main">
              <p>Pão macio e leve feito com purê de batata na massa, perfeito para um lanche.</p>
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
              <p>CROISSANT</p>
              <p>7,00</p>
            </div>
            <div className="box-main">
              <p>Pão francês em formato de meia-lua, com camadas folhadas e uma textura leve e crocante, ideal para o café da manhã.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador8)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador8, setContador8)} className="button-remover">-</button>
                <span>{contador8}</span>
                <button onClick={() => somarUm(contador8, setContador8)} className="button-adicionar">+</button>
                <button onClick={adicionar8} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>
        </div>

        <div className={objeto3 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>TAPIOCA MANTEIGA</p>
              <p>9,00</p>
            </div>
            <div className="box-main">
              <p>Simples e saborosa, a tapioca com manteiga é uma escolha clássica e deliciosa.</p>
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
              <p>TAPIOCA OVO MEXIDO</p>
              <p>12,00</p>
            </div>
            <div className="box-main">
              <p>Tapioca recheada com ovos mexidos, ideal para um café da manhã nutritivo e cheio de energia.</p>
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
              <p>TAPIOCA PRESUNTO E QUEIJO</p>
              <p>14,00</p>
            </div>
            <div className="box-main">
              <p>Uma combinação irresistível de presunto e queijo derretido, perfeita para qualquer momento do dia.</p>
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
              <p>TAPIOCA FRANGO COM CATUPIRY</p>
              <p>18,00</p>
            </div>
            <div className="box-main">
              <p>Frango desfiado com o cremoso catupiry, uma delícia que agrada a todos os paladares.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador12)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador12, setContador12)} className="button-remover">-</button>
                <span>{contador12}</span>
                <button onClick={() => somarUm(contador12, setContador12)} className="button-adicionar">+</button>
                <button onClick={adicionar12} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>TAPIOCA CARNE SECA COM CATUPIRY</p>
              <p>18,00</p>
            </div>
            <div className="box-main">
              <p>O sabor marcante da carne seca combinado com a suavidade do catupiry em uma tapioca deliciosa.</p>
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
              <p>TAPIOCA COCO COM LEITE CONDENSADO</p>
              <p>14,00</p>
            </div>
            <div className="box-main">
              <p>Tapioca doce com a combinação tropical de coco e a doçura do leite condensado.</p>
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
              <p>TAPIOCA NUTELLA</p>
              <p>15,00</p>
            </div>
            <div className="box-main">
              <p>Para os amantes de chocolate, tapioca recheada com o irresistível sabor de Nutella.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador15)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador15, setContador15)} className="button-remover">-</button>
                <span>{contador15}</span>
                <button onClick={() => somarUm(contador15, setContador15)} className="button-adicionar">+</button>
                <button onClick={adicionar15} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

        </div>

        <div className={objeto4 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>PINGADO COADOR</p>
              <p>7,90</p>
            </div>
            <div className="box-main">
              <p>Um clássico brasileiro, o café coado misturado com leite, proporcionando um sabor suave e reconfortante.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador16)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador16, setContador16)} className="button-remover">-</button>
                <span>{contador16}</span>
                <button onClick={() => somarUm(contador16, setContador16)} className="button-adicionar">+</button>
                <button onClick={adicionar16} className="button-adicionar">Adicionar</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-nav">
              <p>CAFÉ</p>
              <p>4,00</p>
            </div>
            <div className="box-main">
              <p>Simples e tradicional, um café preto perfeito para despertar seus sentidos.</p>
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
              <p>CAFÉ EXPRESSO</p>
              <p>5,50</p>
            </div>
            <div className="box-main">
              <p>Intensidade e sabor concentrados em uma dose de café expresso, ideal para um rápido momento de energia.</p>
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
              <p>CAFÉ EXPRESSO MÉDIO</p>
              <p>8,50</p>
            </div>
            <div className="box-main">
              <p>Para quem quer um pouco mais, o expresso médio oferece a mesma intensidade em uma porção maior.</p>
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
              <p>CAPPUCCINO</p>
              <p>9,00</p>
            </div>
            <div className="box-main">
              <p>A combinação perfeita de café expresso, leite vaporizado e espuma, polvilhado com chocolate ou canela.</p>
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
              <p>CHOCOLATE PEQUENO</p>
              <p>4,00</p>
            </div>
            <div className="box-main">
              <p>Uma dose de chocolate quente, doce e cremosa, ideal para aquecer seu dia.</p>
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
              <p>CHOCOLATE GRANDE</p>
              <p>8,00</p>
            </div>
            <div className="box-main">
              <p>Para os amantes de chocolate, uma porção generosa de chocolate quente, perfeita para se deliciar.</p>
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

export default Matinal;
