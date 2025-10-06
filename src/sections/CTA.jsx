import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || '#'

function CTA() {
  return (
    <section id="inscricao" className="cta">
      <div className="container cta-inner">
        <h2>Pronto para começar?</h2>
        <p>Aproveite o preço promocional de lançamento por tempo limitado.</p>
        <a className="btn btn-primary btn-lg" href={PAYMENT_URL}>Quero me inscrever agora</a>
      </div>
    </section>
  )
}

export default CTA






