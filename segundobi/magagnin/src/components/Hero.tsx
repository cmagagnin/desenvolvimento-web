import '../styles/hero.css'
import RectangleOne from '../assets/rectangleOne.png'
import RectangleTwo from '../assets/rectangleTwo.png'
import Button from './Button.tsx'

export function Hero() {
  return (
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
          Desenvolvemos soluções de software sob medida para otimizar processos,
          aumentar a eficiência e impulsionar o crescimento do seu negócio.
        </p>

        <div className="flex gap-1">
          <Button text="Solicitar uma demonstração" />
          <span className="desktop-only">
            <Button text="Ver planos e valores" secondary />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
