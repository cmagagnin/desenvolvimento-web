import '../styles/pricing.css'
import PricingCard from './PricingCard'

const plans = [
  {
    headingId: 'basico-title',
    name: 'Básico',
    description: 'Baixe a ferramenta e comece a utilizar agora mesmo!',
    priceLabel: 'Grátis',
    isFree: true,
    buttonText: 'Pedir agora',
    buttonKey: 'free',
    buttonVariant: 'secondary' as const,
    features: ['Com anúncios', 'Até 10 produtos por dia', 'Utilize sem limitação X'],
  },
  {
    headingId: 'premium-title',
    name: 'Premium',
    description: 'Para quem deseja utilizar nossa ferramenta sem limitações!',
    priceLabel: 'R$ 19,90',
    priceSuffix: '/mês',
    isFree: false,
    badge: '1º mês grátis',
    highlight: true,
    isPremium: true,
    buttonText: 'Pedir agora',
    buttonKey: 'premium',
    buttonVariant: 'primary' as const,
    features: [
      'Sem interrupção de anúncios',
      'Utilize quantas vezes quiser',
      'Utilize todos os produtos disponíveis na plataforma',
    ],
  },
  {
    headingId: 'empresarial-title',
    name: 'Empresarial',
    description: 'Utilize nossa solução na sua empresa. Aprimore seu fluxo.',
    priceLabel: 'R$ 12,90',
    priceSuffix: '/mês por dev',
    isFree: false,
    buttonText: 'Falar com vendas',
    buttonKey: 'enterprise',
    buttonVariant: 'primary' as const,
    features: ['Com anúncios', 'Até 10 produtos por dia', 'Utilize sem limitação X'],
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="container pricing"
      aria-labelledby="pricing-title"
    >
      <header className="main-content">
        <p className="section-tag desktop-only">Planos e preços</p>
        <h2 id="pricing-title" className="section-title">
          Nossos Planos
        </h2>
      </header>

      <ul className="pricing-table" role="list">
        {plans.map((plan) => (
          <li key={plan.headingId}>
            <PricingCard {...plan} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pricing
