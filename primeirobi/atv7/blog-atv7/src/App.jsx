import Header from "./components/Header.jsx"
import Navigation from "./components/Navigation.jsx"
import Article from "./components/Article.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  const postData = {
    title: "Descobrindo as Praias do Nordeste",
    author: "Cesar Magagnin",
    date: "17 de setembro de 2025",
    content:
      "Nunca fui no nordeste, então não tenho experiência de dizer como são as praias de lá. Dizem que vale a pena visitar o nordeste brasileiro. Eu como militar vou pedir transferência um dia e irei passar um tempo lá!",
    imageSrc: "/assets/maragogi.jpeg",
    imageAlt: "Vista panorâmica de uma praia no Nordeste",
    imageCaption: "Praia em Maragogi - AL."
  }

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Article {...postData} />
      </main>
      <Sidebar />
      <Footer />
    </>
  )
}
