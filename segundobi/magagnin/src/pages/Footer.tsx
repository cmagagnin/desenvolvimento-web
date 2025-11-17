import "../styles/footer.css";
import Logo from "../assets/magagnin.svg";
import IG from "../assets/instagram.svg";
import FB from "../assets/facebook.svg";
import YT from "../assets/youtube.svg";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <section className="main">
        <div className="container">
          <section className="brand">
            <span className="logo">
              <img
                src={Logo}
                alt="Logo Magagnin"
                width={220}
                height={80}
              />
            </span>

            <div className="social">
              <p className="social-title">Nossas redes sociais:</p>

              <a
                href="#"
                aria-label="Instagram"
                className="social-icon"
              >
                <img src={IG} alt="Instagram" width={24} height={24} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="social-icon"
              >
                <img src={FB} alt="Facebook" width={24} height={24} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="social-icon"
              >
                <img src={YT} alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </section>

          <nav className="columns" aria-label="Links do rodapé">
            <section className="column">
              <h3>Empresa</h3>
              <a href="#">Sobre nós</a>
              <a href="#">Faça parte do time</a>
              <a href="#">Blog</a>
            </section>

            <section className="column">
              <h3>Funcionalidades</h3>
              <a href="#">Marketing</a>
              <a href="#">Análise de dados</a>
              <a href="#">Boot discord</a>
            </section>

            <section className="column">
              <h3>Recursos</h3>
              <a href="#">IOS &amp; Android</a>
              <a href="#">Teste a Demo</a>
              <a href="#">Clientes</a>
              <a href="#">API</a>
            </section>
          </nav>
        </div>
      </section>

      <section className="bottom">
        <p>Feito com amor na aula de Programação Web💙</p>
        <p>©2025 AktieTech</p>
        <p>Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
