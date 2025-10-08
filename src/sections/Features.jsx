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
            <div className="feature-icon" aria-hidden="true">🛠️</div>
            <h3>Aplicação sem desmontar</h3>
            <p>Métodos práticos para aplicar películas sem desmontar forros ou acabamentos.</p>
          </li>
          <li className="feature-card">
            <div className="feature-icon" aria-hidden="true">⏱️</div>
            <h3>Técnicas que economizam tempo</h3>
            <p>Fluxos e atalhos para agilizar corte, encolhimento e aplicação com precisão.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features


