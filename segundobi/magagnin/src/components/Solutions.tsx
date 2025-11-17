import '../styles/solution.css'
import Code from '../assets/code.svg'
import Cloud from '../assets/cloud.svg'
import { SolutionCard } from './SolutionCard'

export function Solutions() {
  return (
    <section className="container" id="solution">
      <header>
        <span>
          <h2>Nossas Soluções</h2>
          <span className="desktop-only">
            <h2>
              Oferecemos uma variedade de soluções de software para atender às
              necessidades específicas do seu negócio.
            </h2>
          </span>
        </span>

        <p>
          Desde desenvolvimento <strong>personalizado</strong> até integração de sistemas,
          estamos aqui para ajudar sua empresa a alcançar novos patamares.
        </p>
      </header>

      <section className="even-columns">
        <SolutionCard
          icon={Code}
          alt="ícone código"
          title="Sistemas Funcionais"
          description="Sistemas totalmente feitos para as necessidades do seu negócio, com funcionalidades sob medida e tecnologia de ponta."
        />

        <SolutionCard
          icon={Cloud}
          alt="ícone cloud"
          title="Soluções Cloud Inovadoras"
          description="Nossa arquitetura em nuvem é premiada por sua eficiência e escalabilidade. Potencializamos negócios com soluções robustas que garantiram destaque em desafios de tecnologia e inovação."
        />
      </section>
    </section>
  )
}

export default Solutions
