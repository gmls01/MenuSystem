import React, { useState } from "react";
import icons from '../imgIcons/icons';
import { Link } from "react-router-dom";

function HappyHour() {
//Função para adicionar, remover e limpar itens
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
  const [contador23, setContador23] = useState(0);
  const [contador24, setContador24] = useState(0);
  const [contador25, setContador25] = useState(0);
  const [contador26, setContador26] = useState(0);
  const [contador27, setContador27] = useState(0);
  const [contador28, setContador28] = useState(0);
  const [contador29, setContador29] = useState(0);
  const [contador30, setContador30] = useState(0);
  const [contador31, setContador31] = useState(0);
  const [contador32, setContador32] = useState(0);
  const [contador33, setContador33] = useState(0);
  const [contador34, setContador34] = useState(0);

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

//Função para trocar telas sem sair do arquivo
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

  return(
    <>
      {/*Cabeçalho (CSS está no arquivo Home.css)*/}
      <header>
        <nav class="navbar">
          <img src={icons.logo} alt="Logo" />
        </nav>
      </header>
      {/*Corpo/Principal*/}
      <main class="principal">
        <div class="principal-cima">
          <Link to="/"><img src={icons.icon9} alt="Voltar" class="seta"/></Link>
          <h1>HAPPYHOUR</h1>
          <Link to="/Finalizar"><img src={icons.icon8} alt="Menu" class="menu"/></Link>
        </div>

        <div class="barra-opcoes-happyhour">
          <a class="opcao" onClick={mostrarObjetoUm}>PORÇÕES</a>
          <a class="opcao" onClick={mostrarObjetoDois}>BEBIDAS</a>
        </div>

<div class={objeto1 ? "objeto" : "oculto"}>

  <div class="box">
    <div class="box-nav">
      <p>BATATA FRITA (INTEIRA)</p>
      <p>36,00</p>
    </div>

    <div class="box-main">
      <p>Clássicas e crocantes, nossas batatas fritas são perfeitas para acompanhar qualquer refeição.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador1)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador1, setContador1)} class="button-remover">Remover</button>
          <span>{contador1}</span>
          <button onClick={() => somarUm(contador1, setContador1)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>BATATA FRITA (MEIA)</p>
      <p>25,00</p>
    </div>

    <div class="box-main">
      <p>Clássicas e crocantes, nossas batatas fritas são perfeitas para acompanhar qualquer refeição.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador2)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador2, setContador2)} class="button-remover">Remover</button>
          <span>{contador2}</span>
          <button onClick={() => somarUm(contador2, setContador2)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>BATATA FRITA COM CHEDDAR E BACON (INTEIRA)</p>
      <p>55,00</p>
    </div>

    <div class="box-main">
      <p>Batatas fritas cobertas com queijo cheddar cremoso e pedaços crocantes de bacon, uma combinação irresistível.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador3)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador3, setContador3)} class="button-remover">Remover</button>
          <span>{contador3}</span>
          <button onClick={() => somarUm(contador3, setContador3)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>BATATA FRITA COM CHEDDAR E BACON (MEIA)</p>
      <p>40,00</p>
    </div>

    <div class="box-main">
      <p>Batatas fritas cobertas com queijo cheddar cremoso e pedaços crocantes de bacon, uma combinação irresistível.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador4)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador4, setContador4)} class="button-remover">Remover</button>
          <span>{contador4}</span>
          <button onClick={() => somarUm(contador4, setContador4)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CONTRA FILÉ (INTEIRA)</p>
      <p>65,00</p>
    </div>

    <div class="box-main">
      <p>Suculento e bem temperado, o contra filé é uma opção saborosa para os amantes de carne.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador5)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador5, setContador5)} class="button-remover">Remover</button>
          <span>{contador5}</span>
          <button onClick={() => somarUm(contador5, setContador5)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CONTRA FILÉ (MEIA)</p>
      <p>45,00</p>
    </div>

    <div class="box-main">
      <p>Suculento e bem temperado, o contra filé é uma opção saborosa para os amantes de carne.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador6)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador6, setContador6)} class="button-remover">Remover</button>
          <span>{contador6}</span>
          <button onClick={() => somarUm(contador6, setContador6)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>PICANHA (INTEIRA)</p>
      <p>90,00</p>
    </div>

    <div class="box-main">
      <p>Cortes nobres de picanha, preparados à perfeição para uma experiência gastronômica inesquecível.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador7)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador7, setContador7)} class="button-remover">Remover</button>
          <span>{contador7}</span>
          <button onClick={() => somarUm(contador7, setContador7)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>PICANHA (MEIA)</p>
      <p>60,00</p>
    </div>

    <div class="box-main">
      <p>Cortes nobres de picanha, preparados à perfeição para uma experiência gastronômica inesquecível.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador8)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador8, setContador8)} class="button-remover">Remover</button>
          <span>{contador8}</span>
          <button onClick={() => somarUm(contador8, setContador8)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>FILÉ MIGNON (INTEIRA)</p>
      <p>90,00</p>
    </div>

    <div class="box-main">
      <p>Macio e delicioso, o filé mignon é uma escolha premium para quem busca sofisticação e sabor.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador9)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador9, setContador9)} class="button-remover">Remover</button>
          <span>{contador9}</span>
          <button onClick={() => somarUm(contador9, setContador9)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>FILÉ MIGNON (MEIA)</p>
      <p>60,00</p>
    </div>

    <div class="box-main">
      <p>Macio e delicioso, o filé mignon é uma escolha premium para quem busca sofisticação e sabor.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador10)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador10, setContador10)} class="button-remover">Remover</button>
          <span>{contador10}</span>
          <button onClick={() => somarUm(contador10, setContador10)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CALABRESA (INTEIRA)</p>
      <p>50,00</p>
    </div>

    <div class="box-main">
      <p>Linguiça calabresa fatiada e grelhada, perfeita para petiscar.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador11)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador11, setContador11)} class="button-remover">Remover</button>
          <span>{contador11}</span>
          <button onClick={() => somarUm(contador11, setContador11)} class="button-adicionar">Adicionar</button>
        </div>
      </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CALABRESA (MEIA)</p>
      <p>35,00</p>
    </div>

    <div class="box-main">
      <p>Linguiça calabresa fatiada e grelhada, perfeita para petiscar.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador12)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador12, setContador12)} class="button-remover">Remover</button>
          <span>{contador12}</span>
          <button onClick={() => somarUm(contador12, setContador12)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>FRANGO A PASSARINHO (INTEIRA)</p>
      <p>50,00</p>
    </div>

    <div class="box-main">
      <p>Pedaços de frango temperados e fritos até ficarem dourados e crocantes.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador13)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador13, setContador13)} class="button-remover">Remover</button>
          <span>{contador13}</span>
          <button onClick={() => somarUm(contador13, setContador13)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>FRANGO A PASSARINHO (MEIA)</p>
      <p>35,00</p>
    </div>

    <div class="box-main">
      <p>Pedaços de frango temperados e fritos até ficarem dourados e crocantes.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador14)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador14, setContador14)} class="button-remover">Remover</button>
          <span>{contador14}</span>
          <button onClick={() => somarUm(contador14, setContador14)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>ISCA DE PEIXE (INTEIRA)</p>
      <p>50,00</p>
    </div>

    <div class="box-main">
      <p>Peixe fresco cortado em iscas e empanado, ideal para quem aprecia frutos do mar.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador15)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador15, setContador15)} class="button-remover">Remover</button>
          <span>{contador15}</span>
          <button onClick={() => somarUm(contador15, setContador15)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>ISCA DE PEIXE (MEIA)</p>
      <p>35,00</p>
    </div>

    <div class="box-main">
      <p>Peixe fresco cortado em iscas e empanado, ideal para quem aprecia frutos do mar.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador16)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador16, setContador16)} class="button-remover">Remover</button>
          <span>{contador16}</span>
          <button onClick={() => somarUm(contador16, setContador16)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA OVO MEXIDO</p>
      <p>12,00</p>
    </div>

    <div class="box-main">
      <p>Tapioca recheada com ovos mexidos, ideal para um café da manhã nutritivo e cheio de energia.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador17)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador17, setContador17)} class="button-remover">Remover</button>
          <span>{contador17}</span>
          <button onClick={() => somarUm(contador17, setContador17)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA PRESUNTO E QUEIJO</p>
      <p>14,00</p>
    </div>

    <div class="box-main">
      <p>Uma combinação irresistível de presunto e queijo derretido, perfeita para qualquer momento do dia.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador18)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador18, setContador18)} class="button-remover">Remover</button>
          <span>{contador18}</span>
          <button onClick={() => somarUm(contador18, setContador18)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA FRANGO COM CATUPIRY</p>
      <p>18,00</p>
    </div>

    <div class="box-main">
      <p>Frango desfiado com o cremoso catupiry, uma delícia que agrada a todos os paladares.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador19)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador19, setContador19)} class="button-remover">Remover</button>
          <span>{contador19}</span>
          <button onClick={() => somarUm(contador19, setContador19)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA CARNE SECA COM CATUPIRY</p>
      <p>18,00</p>
    </div>

    <div class="box-main">
      <p>O sabor marcante da carne seca combinado com a suavidade do catupiry em uma tapioca deliciosa.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador20)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador20, setContador20)} class="button-remover">Remover</button>
          <span>{contador20}</span>
          <button onClick={() => somarUm(contador20, setContador20)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>


</div>

<div class={objeto2 ? "objeto" : "oculto"}>




</div>

<div class={objeto3 ? "objeto" : "oculto"}>


  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA PEITO DE PERU E QUEIJO BRANCO</p>
      <p>18,00</p>
    </div>

    <div class="box-main">
      <p>Uma opção leve e saudável, com peito de peru e queijo branco.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador21)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador21, setContador21)} class="button-remover">Remover</button>
          <span>{contador21}</span>
          <button onClick={() => somarUm(contador21, setContador21)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA COCO COM LEITE CONDENSADO</p>
      <p>14,00</p>
    </div>

    <div class="box-main">
      <p>Tapioca doce com a combinação tropical de coco e a doçura do leite condensado.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador22)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador22, setContador22)} class="button-remover">Remover</button>
          <span>{contador22}</span>
          <button onClick={() => somarUm(contador22, setContador22)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA BANANA COM LEITE CONDENSADO E CANELA</p>
      <p>15,00</p>
    </div>

    <div class="box-main">
      <p>A doçura da banana com leite condensado e o toque especial da canela.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador23)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador23, setContador23)} class="button-remover">Remover</button>
          <span>{contador23}</span>
          <button onClick={() => somarUm(contador23, setContador23)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA NUTELLA</p>
      <p>15,00</p>
    </div>

    <div class="box-main">
      <p>Para os amantes de chocolate, tapioca recheada com o irresistível sabor de Nutella.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador24)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador24, setContador24)} class="button-remover">Remover</button>
          <span>{contador24}</span>
          <button onClick={() => somarUm(contador24, setContador24)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA NUTELLA COM MORANGO</p>
      <p>17,00</p>
    </div>

    <div class="box-main">
      <p>Uma combinação perfeita de Nutella e morangos frescos, para um sabor inesquecível.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador25)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador25, setContador25)} class="button-remover">Remover</button>
          <span>{contador25}</span>
          <button onClick={() => somarUm(contador25, setContador25)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>TAPIOCA NUTELLA COM BANANA</p>
      <p>17,00</p>
    </div>

    <div class="box-main">
      <p>A cremosidade da banana com o sabor marcante da Nutella, uma combinação deliciosa.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador26)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador26, setContador26)} class="button-remover">Remover</button>
          <span>{contador26}</span>
          <button onClick={() => somarUm(contador26, setContador26)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

</div>

<div class={objeto4 ? "objeto" : "oculto"}>

  <div class="box">
    <div class="box-nav">
      <p>PINGADO COADOR</p>
      <p>7,90</p>
    </div>

    <div class="box-main">
      <p>Um clássico brasileiro, o café coado misturado com leite, proporcionando um sabor suave e reconfortante.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador27)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador27, setContador27)} class="button-remover">Remover</button>
          <span>{contador27}</span>
          <button onClick={() => somarUm(contador27, setContador27)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CAFÉ</p>
      <p>4,00</p>
    </div>

    <div class="box-main">
      <p>Simples e tradicional, um café preto perfeito para despertar seus sentidos.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador28)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador28, setContador28)} class="button-remover">Remover</button>
          <span>{contador28}</span>
          <button onClick={() => somarUm(contador28, setContador28)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CAFÉ EXPRESSO</p>
      <p>5,50</p>
    </div>

    <div class="box-main">
      <p>Intensidade e sabor concentrados em uma dose de café expresso, ideal para um rápido momento de energia.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador29)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador29, setContador29)} class="button-remover">Remover</button>
          <span>{contador29}</span>
          <button onClick={() => somarUm(contador29, setContador29)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CAFÉ EXPRESSO MÉDIO</p>
      <p>8,50</p>
    </div>

    <div class="box-main">
      <p>Para quem quer um pouco mais, o expresso médio oferece a mesma intensidade em uma porção maior.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador30)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador30, setContador30)} class="button-remover">Remover</button>
          <span>{contador30}</span>
          <button onClick={() => somarUm(contador30, setContador30)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CAPPUCCINO</p>
      <p>9,00</p>
    </div>

    <div class="box-main">
      <p>A combinação perfeita de café expresso, leite vaporizado e espuma, polvilhado com chocolate ou canela.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador31)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador31, setContador31)} class="button-remover">Remover</button>
          <span>{contador31}</span>
          <button onClick={() => somarUm(contador31, setContador31)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CHOCOLATE PEQUENO</p>
      <p>4,00</p>
    </div>

    <div class="box-main">
      <p>Uma dose de chocolate quente, doce e cremosa, ideal para aquecer seu dia.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador32)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador32, setContador32)} class="button-remover">Remover</button>
          <span>{contador32}</span>
          <button onClick={() => somarUm(contador32, setContador32)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CHOCOLATE GRANDE</p>
      <p>8,00</p>
    </div>

    <div class="box-main">
      <p>Para os amantes de chocolate, uma porção generosa de chocolate quente, perfeita para se deliciar.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador33)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador33, setContador33)} class="button-remover">Remover</button>
          <span>{contador33}</span>
          <button onClick={() => somarUm(contador33, setContador33)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

  <div class="box">
    <div class="box-nav">
      <p>CHOCOLATE BATIDO</p>
      <p>9,00</p>
    </div>

    <div class="box-main">
      <p>Uma versão ainda mais cremosa e deliciosa, com o chocolate batido até a perfeição.</p>
        <div class="box-button">
          <button onClick={() => zerarContador(setContador34)} class="button-limpar">Limpar</button>
          <button onClick={() => subtrairUm(contador34, setContador34)} class="button-remover">Remover</button>
          <span>{contador34}</span>
          <button onClick={() => somarUm(contador34, setContador34)} class="button-adicionar">Adicionar</button>
        </div>
    </div>
  </div>

</div>

      </main>
       {/*Rodapé (CSS está no arquivo Home.css)*/}  
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
};

export default HappyHour;
