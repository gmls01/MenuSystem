import "./Home.css";
import icons from '../imgIcons/icons';
import { Link } from "react-router-dom";

function Home() {
  
  return(
  <>
  {/*Cabeçalho*/}
    <header>
      <nav class="navbar">
        <img src={icons.logo} alt="Logo" />
      </nav>
    </header>
  {/*Corpo/Principal*/}
    <main class="principal">
      <h1>
        Bem-vindo ao Nosso Cardápio Online! Explore nossas
        opções<br/> e faça seu pedido diretamente <br/>da mesa 
        utilizando o QR Code fornecido. Se precisar de ajuda<br/> 
        ou tiver alguma dúvida, nossos funcionários estão à 
        disposição<br/> para ajudá-lo. Aproveite a sua experiência<br/>
        gastronômica conosco!
      </h1>

      <div class="linha">{/*Linha cinza de divisão*/}</div>

      <div class="div-icons">
        <div class="matinal">
          <Link to="/Matinal"><img src={icons.icon1} alt="incon-matinal" /></Link>
        </div>
        
        
        <div class="refeicoes">
          <Link to="/Refeicoes"><img src={icons.icon2} alt="incon-matinal" /></Link>
        </div>
      </div>

      <div class="div-icons-titulo">
        <h1>MATINAL</h1>
        <h1>REFEIÇÕES</h1>
      </div>

      <div class="div-icons">
        <div class="happy-hour">
        <Link to="/HappyHour"><img src={icons.icon3} alt="incon-happy-hour" /></Link>
        </div>
      </div>

      <div class="div-icons-titulo2">
        <h1>HAPPY <br/> HOUR</h1>
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
};

export default Home;