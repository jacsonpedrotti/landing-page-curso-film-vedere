import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'

function CTA() {
  return (
    <section id="inscricao" className="cta">
      <div className="container cta-inner">
        <h2>Pronto para começar?</h2>
        <p>Aproveite o preço promocional de lançamento por tempo limitado.</p>
        <a className="btn btn-primary btn-lg hotmart-fb hotmart__button-checkout" href={PAYMENT_URL}>COMPRAR CURSO ONLINE</a>
        <div className="cta-logo">
          <a href="https://vederefilms.com.br/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/logo-vedere-50x50.png" alt="Vedere Films" className="vedere-logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA






