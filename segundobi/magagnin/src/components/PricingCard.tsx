import Check from '../assets/check.svg'
import Button from './Button.tsx'

type PricingCardProps = {
  headingId: string
  name: string
  description: string
  priceLabel: string
  priceSuffix?: string
  isFree?: boolean
  badge?: string
  highlight?: boolean
  isPremium?: boolean
  buttonText: string
  buttonKey: string
  buttonVariant?: 'primary' | 'secondary'
  features: string[]
}

export function PricingCard({
  headingId,
  name,
  description,
  priceLabel,
  priceSuffix,
  isFree,
  badge,
  highlight,
  isPremium,
  buttonText,
  buttonKey,
  buttonVariant = 'primary',
  features,
}: PricingCardProps) {
  return (
    <article
      className={`pricing-card${isPremium ? ' premium' : ''}`}
      aria-labelledby={headingId}
    >
      {badge && <p className="badge">{badge}</p>}

      <section className="price">
        <header className="frame-48095966">
          <h3
            id={headingId}
            className={highlight ? 'highlight' : undefined}
          >
            {name}
          </h3>
          <p>{description}</p>
        </header>

        {isFree ? (
          <p className="pricing-amount">
            <strong>{priceLabel}</strong>
          </p>
        ) : (
          <p className="preco" aria-label="Preço">
            <strong>{priceLabel}</strong>
            {priceSuffix && <small>{priceSuffix}</small>}
          </p>
        )}

        <Button
          text={buttonText}
          secondary={buttonVariant === 'secondary'}
          key={buttonKey}
        />
      </section>

      <hr className="hr" />

      <ul className="features" role="list">
        {features.map((feature) => (
          <li className="feature" key={feature}>
            <img
              className="check"
              src={Check}
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingCard
