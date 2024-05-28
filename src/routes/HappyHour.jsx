import React, { useContext, useState } from 'react';
import { PedidoContext } from './PedidoContext';
import { Link } from "react-router-dom";
import icons from '../imgIcons/icons';

function HappyHour() {
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
      adicionarItem({ nome: "BATATA FRITA (INTEIRA)", preco: "36,00", quantidade: contador1 });
      zerarContador(setContador1);
    }
  };

  const adicionar2 = () => {
    if (contador2 > 0) {
      adicionarItem({ nome: "BATATA FRITA (MEIA)", preco: "25,00", quantidade: contador2 });
      zerarContador(setContador2);
    }
  };

  const adicionar3 = () => {
    if (contador3 > 0) {
      adicionarItem({ nome: "BATATA FRITA COM CHEDDAR E BACON (INTEIRA)", preco: "55,00", quantidade: contador3 });
      zerarContador(setContador3);
    }
  };

  const adicionar4 = () => {
    if (contador4 > 0) {
      adicionarItem({ nome: "BATATA FRITA COM CHEDDAR E BACON (MEIA)", preco: "40,00", quantidade: contador4 });
      zerarContador(setContador4);
    }
  };

  const adicionar5 = () => {
    if (contador5 > 0) {
      adicionarItem({ nome: "PICANHA (INTEIRA)", preco: "90,00", quantidade: contador5 });
      zerarContador(setContador5);
    }
  };

  const adicionar6 = () => {
    if (contador6 > 0) {
      adicionarItem({ nome: "PICANHA (MEIA)", preco: "60,00", quantidade: contador6 });
      zerarContador(setContador6);
    }
  };

  const adicionar7 = () => {
    if (contador7 > 0) {
      adicionarItem({ nome: "FRANGO A PASSARINHO (INTEIRA)", preco: "50,00", quantidade: contador7 });
      zerarContador(setContador7);
    }
  };

  const adicionar8 = () => {
    if (contador8 > 0) {
      adicionarItem({ nome: "FRANGO A PASSARINHO (MEIA)", preco: "35,00", quantidade: contador8 });
      zerarContador(setContador8);
    }
  };

  const adicionar9 = () => {
    if (contador9 > 0) {
      adicionarItem({ nome: "ÁGUA NATURAL", preco: "4,00", quantidade: contador9 });
      zerarContador(setContador9);
    }
  };

  const adicionar10 = () => {
    if (contador10 > 0) {
      adicionarItem({ nome: "ÁGUA COM GÁS", preco: "5,00", quantidade: contador10 });
      zerarContador(setContador10);
    }
  };

  const adicionar11 = () => {
    if (contador11 > 0) {
      adicionarItem({ nome: "HEINEKEN 600ML", preco: "19,50", quantidade: contador11 });
      zerarContador(setContador11);
    }
  };

  const adicionar12 = () => {
    if (contador12 > 0) {
      adicionarItem({ nome: "SERRA MALTE 600ML", preco: "15,00", quantidade: contador12 });
      zerarContador(setContador12);
    }
  };

  const adicionar13 = () => {
    if (contador13 > 0) {
      adicionarItem({ nome: "ORIGINAL 600ML", preco: "16,00", quantidade: contador13 });
      zerarContador(setContador13);
    }
  };

  const adicionar14 = () => {
    if (contador14 > 0) {
      adicionarItem({ nome: "BRAHMA PURO MALTE 350ML", preco: "8,00", quantidade: contador14 });
      zerarContador(setContador14);
    }
  };

  const adicionar15 = () => {
    if (contador15 > 0) {
      adicionarItem({ nome: "MALZBIER BRAHMA 350ML", preco: "9,00", quantidade: contador15 });
      zerarContador(setContador15);
    }
  };

  const adicionar16 = () => {
    if (contador16 > 0) {
      adicionarItem({ nome: "BRAHMA ZERO 350ML", preco: "9,00", quantidade: contador16 });
      zerarContador(setContador16);
    }
  };

  const adicionar17 = () => {
    if (contador17 > 0) {
      adicionarItem({ nome: "ORIGINAL 350ML", preco: "8,50", quantidade: contador17 });
      zerarContador(setContador17);
    }
  };

  // Função para trocar telas sem sair do arquivo
  const [objeto1, setObjeto1] = useState(true);
  const [objeto2, setObjeto2] = useState(false);

  const mostrarObjetoUm = () => {
    setObjeto1(true);
    setObjeto2(false);
    };

  const mostrarObjetoDois = () => {
    setObjeto1(false);
    setObjeto2(true);
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
          <h1>HAPPYHOUR</h1>
          <Link to="/Finalizar"><img src={icons.icon8} alt="Menu" className="menu" /></Link>
        </div>

        <div className="barra-opcoes-happyhour">
          <a className="opcao" onClick={mostrarObjetoUm}>PORÇÕES</a>
          <a className="opcao" onClick={mostrarObjetoDois}>BEBIDAS</a>
        </div>

        <div className={objeto1 ? "objeto" : "oculto"}>

          <div className="box">
            <div className="box-nav">
              <p>BATATA FRITA (INTEIRA)</p>
              <p>36,00</p>
            </div>
            <div className="box-main">
              <p>Clássicas e crocantes, nossas batatas fritas são perfeitas para acompanhar qualquer refeição.</p>
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
              <p>BATATA FRITA (MEIA)</p>
              <p>25,00</p>
            </div>
            <div className="box-main">
              <p>Clássicas e crocantes, nossas batatas fritas são perfeitas para acompanhar qualquer refeição.</p>
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
              <p>BATATA FRITA COM CHEDDAR E BACON (INTEIRA)</p>
              <p>55,00</p>
            </div>
            <div className="box-main">
              <p>Batatas fritas cobertas com queijo cheddar cremoso e pedaços crocantes de bacon, uma combinação irresistível.</p>
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
              <p>BATATA FRITA COM CHEDDAR E BACON (MEIA)</p>
              <p>40,00</p>
            </div>
            <div className="box-main">
              <p>Batatas fritas cobertas com queijo cheddar cremoso e pedaços crocantes de bacon, uma combinação irresistível.</p>
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
              <p>PICANHA (INTEIRA)</p>
              <p>90,00</p>
            </div>
            <div className="box-main">
              <p>Cortes nobres de picanha, preparados à perfeição para uma experiência gastronômica inesquecível.</p>
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
              <p>PICANHA (MEIA)</p>
              <p>60,00</p>
            </div>
            <div className="box-main">
              <p>Cortes nobres de picanha, preparados à perfeição para uma experiência gastronômica inesquecível.</p>
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
              <p>FRANGO A PASSARINHO (INTEIRA)</p>
              <p>50,00</p>
            </div>
            <div className="box-main">
              <p>Pedaços de frango temperados e fritos até ficarem dourados e crocantes.</p>
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
              <p>FRANGO A PASSARINHO (MEIA)</p>
              <p>35,00</p>
            </div>
            <div className="box-main">
              <p>Pedaços de frango temperados e fritos até ficarem dourados e crocantes.</p>
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

        <div className={objeto2 ? "objeto" : "oculto"}>

          
        <div className="box">
            <div className="box-nav">
              <p>ÁGUA NATURAL</p>
              <p>4,00</p>
            </div>
            <div className="box-main">
              <p>Água mineral natural, para refrescar e hidratar.</p>
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
              <p>ÁGUA COM GÁS</p>
              <p>5,00</p>
            </div>
            <div className="box-main">
              <p>Água mineral com gás, para quem prefere uma opção levemente gaseificada.</p>
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
              <p>HEINEKEN 600ML</p>
              <p>19,50</p>
            </div>
            <div className="box-main">
              <p>Uma cerveja premium com sabor equilibrado e refrescante, ideal para todas as ocasiões.</p>
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
              <p>SERRA MALTE 600ML</p>
              <p>15,00</p>
            </div>
            <div className="box-main">
              <p>Cerveja de sabor marcante, perfeita para quem aprecia uma bebida encorpada.</p>
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
              <p>ORIGINAL 600ML</p>
              <p>16,00</p>
            </div>
            <div className="box-main">
              <p>Clássica e saborosa, a Original é uma cerveja que agrada a todos os paladares.</p>
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
              <p>BRAHMA PURO MALTE 350ML</p>
              <p>8,00</p>
            </div>
            <div className="box-main">
              <p>Uma cerveja de puro malte com sabor encorpado e equilibrado.</p>
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
              <p>MALZBIER BRAHMA 350ML</p>
              <p>9,00</p>
            </div>
            <div className="box-main">
              <p>Uma cerveja escura e adocicada, perfeita para quem gosta de sabores mais intensos.</p>
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
              <p>BRAHMA ZERO 350ML</p>
              <p>9,00</p>
            </div>
            <div className="box-main">
              <p>A versão sem álcool da Brahma, ideal para quem deseja saborear uma boa cerveja sem os efeitos do álcool.</p>
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
              <p>ORIGINAL 350ML</p>
              <p>8,50</p>
            </div>
            <div className="box-main">
              <p>Clássica e saborosa, a Original é uma cerveja que agrada a todos os paladares, agora em uma garrafa menor.</p>
              <div className="box-button">
                <button onClick={() => zerarContador(setContador17)} className="button-limpar">Limpar</button>
                <button onClick={() => subtrairUm(contador17, setContador17)} className="button-remover">-</button>
                <span>{contador17}</span>
                <button onClick={() => somarUm(contador17, setContador17)} className="button-adicionar">+</button>
                <button onClick={adicionar17} className="button-adicionar">Adicionar</button>
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

export default HappyHour;
