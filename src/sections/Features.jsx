import React from 'react'

function Features() {
  return (
    <section id="beneficios" className="features">
      <div className="container">
        <h2 className="section-title">O que você vai aprender</h2>
        <ul className="features-grid nice-cards">
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">🚗</div>
            <h3>Instalação automotiva</h3>
            <p>Técnicas de aplicação em vidros automotivos, corte, encolhimento e acabamento.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">🏠</div>
            <h3>Instalação residencial</h3>
            <p>Passo a passo para janelas residenciais: preparo, aplicação e manutenção.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">🧰</div>
            <h3>Materiais e ferramentas</h3>
            <p>Como escolher películas, ferramentas essenciais e onde comprar com confiança.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">💼</div>
            <h3>Atendimento e orçamento</h3>
            <p>Como precificar, abordar clientes e fechar contratos com segurança.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features


