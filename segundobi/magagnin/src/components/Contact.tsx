import type { FormEvent } from 'react'
import { useState } from 'react'
import '../styles/contact.css'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus('error')
        setFeedback(data.message || 'Erro ao enviar a mensagem.')
        return
      }

      setStatus('success')
      setFeedback(data.message || 'Mensagem enviada com sucesso!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback('Erro ao enviar a mensagem. Tente novamente mais tarde.')
    }
  }

  const isLoading = status === 'loading'

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

        <form
          className="contact__form"
          onSubmit={handleSubmit}
          noValidate
          aria-describedby="contact-feedback"
        >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="input-group">
            <span className="input-label">Mensagem</span>
            <textarea
              className="form-control input-style-1 input-textarea"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>

          <button className="btn btn-md" type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>

          {status !== 'idle' && (
            <p
              id="contact-feedback"
              className={
                status === 'success'
                  ? 'contact-feedback contact-feedback--success'
                  : 'contact-feedback contact-feedback--error'
              }
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
