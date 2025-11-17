import '../styles/contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <header className="contact__header">
          <p className="section-tag">Fale conosco</p>
          <h2 className="section-title">Entre em contato</h2>
          <p className="section-subtitle">
            Tire dúvidas sobre planos, prazos e integrações. Retornaremos em breve.
          </p>
        </header>

        <form className="contact__form" action="" method="post" noValidate>
          <p className="visually-hidden" id="contact-instructions">
            Preencha os campos e envie sua mensagem
          </p>

          <label className="input-group">
            <span className="input-label">Seu nome</span>
            <input
              className="form-control input-style-1"
              type="text"
              name="name"
              autoComplete="name"
              aria-describedby="contact-instructions"
              required
            />
          </label>

          <label className="input-group">
            <span className="input-label">Seu e-mail</span>
            <input
              className="form-control input-style-1"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="input-group">
            <span className="input-label">Mensagem</span>
            <textarea
              className="form-control input-style-1 input-textarea"
              name="message"
              rows={4}
              required
            ></textarea>
          </label>

          <button className="btn btn-md" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
