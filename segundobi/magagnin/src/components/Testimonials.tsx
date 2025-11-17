import '../styles/testimonials.css'
import ProfileImageOne from '../assets/profile1.svg'
import TestimonialCard from './TestimonialCard'

export function Testimonials() {
  const testimonials = [
    {
      image: ProfileImageOne,
      testimonial:
        'A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim.',
      rating: 4,
      name: 'Sandrolaxx',
      role: 'CEO da Tech Solutions',
    },
    {
      image: ProfileImageOne,
      testimonial:
        'A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim.',
      rating: 4,
      name: 'Sandrolaxx',
      role: 'CEO da Tech Solutions',
    },
    {
      image: ProfileImageOne,
      testimonial:
        'A Magagnin transformou nossa operação com um sistema personalizado que atendeu perfeitamente às nossas necessidades. A equipe foi profissional e eficiente do início ao fim.',
      rating: 4,
      name: 'Sandrolaxx',
      role: 'CEO da Tech Solutions',
    },
  ]

  return (
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
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
