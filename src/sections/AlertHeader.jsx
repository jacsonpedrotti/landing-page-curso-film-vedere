import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || 'https://pay.hotmart.com/N101809353Q?checkoutMode=2&off=lnqqh9tv'

function AlertHeader() {
  return (
    <div className="alert-header">
      <div className="container alert-inner">
        <div className="marquee" tabIndex="0" aria-label="Alerta: curso com vagas limitadas">
          <div className="marquee-track">
            <span>
              CURSO COM <span className="u-underline">VAGAS LIMITADAS</span>, NÃO PERCA TEMPO E COMPRE JÁ!
            </span>
          </div>
        </div>
        <a href={PAYMENT_URL} className="btn btn-primary alert-cta hotmart-fb hotmart__button-checkout">Garantir vaga</a>
      </div>
    </div>
  )
}

export default AlertHeader


