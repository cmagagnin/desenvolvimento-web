import Star from '../assets/star.svg'
import StarOuter from '../assets/star-outer.svg'

type TestimonialCardProps = {
  image: string
  testimonial: string
  rating: number
  name: string
  role: string
}

export function TestimonialCard({
  image,
  testimonial,
  rating,
  name,
  role,
}: TestimonialCardProps) {
  const fullStars = Array(rating).fill(0)
  const emptyStars = Array(5 - rating).fill(0)

  return (
    <div className="carousel-card">
      <img src={image} alt={`Foto de ${name}`} width={64} height={64} />

      <span className="testimony">
        <p>{testimonial}</p>
      </span>

      <span className="rating">
        {fullStars.map((_, i) => (
          <img src={Star} alt="ícone estrela" width={22} height={20} key={i} />
        ))}
        {emptyStars.map((_, i) => (
          <img
            src={StarOuter}
            alt="ícone estrela vazia"
            width={20}
            height={22}
            key={`empty-${i}`}
          />
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  )
}

export default TestimonialCard
