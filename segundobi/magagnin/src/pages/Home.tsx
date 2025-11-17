import '../styles/utility.css'
import '../styles/header.css'
import '../styles/solution.css'
import '../styles/hero.css'
import '../styles/testimonials.css'
import '../styles/pricing.css'
import '../styles/contact.css'
import Check from '../assets/check.svg'
import Logo from '../assets/magagnin.svg'
import { useState } from 'react'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import Button from '../components/Button.tsx'
import RectangleOne from '../assets/rectangleOne.png'
import RectangleTwo from '../assets/rectangleTwo.png'
import Code from '../assets/code.svg'
import Cloud from '../assets/cloud.svg'
import ProfileImageOne from '../assets/profile1.svg'
import Star from '../assets/star.svg'
import StarOuter from '../assets/star-outer.svg'
import Footer from './Footer.tsx'

export function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Magagnin" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={RectangleTwo} alt="Imagem retangulo pequeno" />
                </span>
                <img src={RectangleOne} alt="Imagem retangulo grande" />
                <div className="container content">
                    <p className="desktop-only">
                        Soluções em software para o seu negócio
                    </p>
                    <h1>
                        Transforme sua empresa com nossos sistemas personalizados
                    </h1>
                    <p>
                        Desenvolvemos soluções de software sob medida para otimizar processos, aumentar a eficiência e impulsionar o crescimento do seu negócio.
                    </p>
                    <div className="flex gap-1">
                        <Button text="Solicitar uma demonstração" />
                        <span className="desktop-only">
                            <Button text="Ver planos e valores" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Nossas Soluções</h2>
                        <span className='desktop-only'>
                            <h2>
                                Oferecemos uma variedade de soluções de software para atender às necessidades específicas do seu negócio.
                            </h2>
                        </span>
                    </span>
                    <p>
                        Desde desenvolvimento <strong>personalizado</strong> até integração de sistemas, estamos aqui para ajudar sua empresa a alcançar novos patamares.
                    </p>

                    <section id="solution" className="container">
                        <header>
                            <h2>Nossas Soluções</h2>
                            <p>
                                Oferecemos uma variedade de soluções de software para atender às necessidades do seu negócio.
                            </p>
                            <p>
                                Desde desenvolvimento <strong>personalizado</strong> até integração de sistemas, estamos aqui para ajudar sua empresa a alcançar novos patamares.
                            </p>
                        </header>
                    </section>
                    <section id="solution" className='even-columns'>
                        <div className='card'>
                            <span>
                                <img src={Code} alt='ícone código' width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Sistemas Funcionais
                                </h3>
                                <p>
                                    Sistemas totalmente feitos para as necessidades do seu negócio, com funcionalidades sob medida e tecnologia de ponta.
                                </p>
                                <hr />
                            </div>
                        </div>
                        <div className="card">
                            <span>
                                <img src={Cloud} alt="ícone cloud" width={64} height={64} />
                            </span>
                            <div>
                                <h3>
                                    Soluções Cloud Inovadoras
                                </h3>
                                <p>
                                    Nossa arquitetura em nuvem é premiada por sua eficiência e escalabilidade. Potencializamos negócios com soluções robustas que garantiram destaque em desafios de tecnologia e inovação.
                                </p>
                                <hr />
                            </div>
                        </div>
                    </section>
                </header>
            </section>
            <section id="testimonials">
                <div className="container">
                    <header>
                        <h2>O que nossos clientes dizem</h2>
                        <p>
                            Veja o que nossos clientes satisfeitos têm a dizer sobre nossas soluções de software personalizadas.
                        </p>
                    </header>
                </div>
                <div className="carousel-content">
                    <div className="carousel-card">
                        <img src={ProfileImageOne} alt="Foto de perfil do cliente" width={64} height={64} />
                        <span className="testimony">
                            <p>
                                "A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim."
                            </p>
                        </span>
                        <span className="rating">
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Sandrolaxx</p>
                            <p>CEO da Tech Solutions</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={ProfileImageOne} alt="Foto de perfil do cliente" width={64} height={64} />
                        <span className="testimony">
                            <p>
                                "A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim."
                            </p>
                        </span>
                        <span className="rating">
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Sandrolaxx</p>
                            <p>CEO da Tech Solutions</p>
                        </span>
                    </div>
                    <div className="carousel-card">
                        <img src={ProfileImageOne} alt="Foto de perfil do cliente" width={64} height={64} />
                        <span className="testimony">
                            <p>
                                "A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim."
                            </p>
                        </span>
                        <span className="rating">
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={Star} alt="ícone estrela" width={22} height={20} />
                            <img src={StarOuter} alt="ícone estrela sem fundo" width={20} height={22} />
                        </span>
                        <span className="names">
                            <p>Sandrolaxx</p>
                            <p>CEO da Tech Solutions</p>
                        </span>
                    </div>
                </div>
            </section>
<section id="pricing" className="container pricing" aria-labelledby="pricing-title">
  <header className="main-content">
    <p className="section-tag desktop-only">Planos e preços</p>
    <h2 id="pricing-title" className="section-title">Nossos Planos</h2>
  </header>

  <ul className="pricing-table" role="list">
    <li>
      <article className="pricing-card" aria-labelledby="basico-title">
        <section className="price">
          <header className="frame-48095966">
            <h3 id="basico-title">Básico</h3>
            <p>Baixe a ferramenta e comece a utilizar agora mesmo!</p>
          </header>

          <p className="pricing-amount"><strong>Grátis</strong></p>
          <Button text="Pedir agora" secondary key="free" />
        </section>

        <hr className="hr" />

        <ul className="features" role="list">
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Com anúncios</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Até 10 produtos por dia</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Utilize sem limitação X</p>
          </li>
        </ul>
      </article>
    </li>

    <li>
      <article className="pricing-card premium" aria-labelledby="premium-title">
        <p className="badge">1º mês grátis</p>

        <section className="price">
          <header className="frame-48095966">
            <h3 id="premium-title" className="highlight">Premium</h3>
            <p>Para quem deseja utilizar nossa ferramenta sem limitações!</p>
          </header>

          <p className="preco" aria-label="Preço">
            <strong>R$ 19,90</strong>
            <small>/mês</small>
          </p>

          <Button text="Pedir agora" key="premium" />
        </section>

        <hr className="hr" />

        <ul className="features" role="list">
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Sem interrupção de anúncios</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Utilize quantas vezes quiser</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Utilize todos os produtos disponíveis na plataforma</p>
          </li>
        </ul>
      </article>
    </li>

    <li>
      <article className="pricing-card" aria-labelledby="empresarial-title">
        <section className="price">
          <header className="frame-48095966">
            <h3 id="empresarial-title">Empresarial</h3>
            <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
          </header>

          <p className="preco" aria-label="Preço">
            <strong>R$ 12,90</strong>
            <small>/mês por dev</small>
          </p>

          <Button text="Falar com vendas"/>
        </section>

        <hr className="hr" />

        <ul className="features" role="list">
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Com anúncios</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Até 10 produtos por dia</p>
          </li>
          <li className="feature">
            <img className="check" src={Check} alt="" width={24} height={24} aria-hidden="true" />
            <p>Utilize sem limitação X</p>
          </li>
        </ul>
      </article>
    </li>
  </ul>
</section>
<section id="contact" className="contact">
  <div className="contact__container">
    <header className="contact__header">
      <p className="section-tag">Fale conosco</p>
      <h2 className="section-title">Entre em contato</h2>
      <p className="section-subtitle">Tire dúvidas sobre planos, prazos e integrações. Retornaremos em breve.</p>
    </header>

    <form className="contact__form" action="" method="post" noValidate>
      <p className="visually-hidden" id="contact-instructions">Preencha os campos e envie sua mensagem</p>

      <label className="input-group">
        <span className="input-label">Seu nome</span>
        <input className="form-control input-style-1" type="text" name="name" autoComplete="name" aria-describedby="contact-instructions" required />
      </label>

      <label className="input-group">
        <span className="input-label">Seu e-mail</span>
        <input className="form-control input-style-1" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="input-group">
        <span className="input-label">Mensagem</span>
        <textarea className="form-control input-style-1 input-textarea" name="message" rows={4} required></textarea>
      </label>

      <button className="btn btn-md" type="submit">Enviar</button>
    </form>
  </div>
</section>

<Footer />

        </>
    )
}