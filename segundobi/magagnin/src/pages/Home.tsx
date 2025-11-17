import '../styles/utility.css'
import Header from '../components/Header'
import Hero from '../components/Hero.tsx'
import Solutions from '../components/Solutions.tsx'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing.tsx'
import Contact from '../components/Contact'
import Footer from '../components/Footer.tsx'

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Solutions />
            <Testimonials />
            <Pricing />
            <Contact />
            <Footer />
        </>
    )
}