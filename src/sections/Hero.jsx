import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || '#'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Curso de aplicação de películas residenciais e automotivas</h1>
          <p>
            Curso Profissional de Aplicação de Películas – Do Zero ao Avançado!
            <br /><br />
            Aprenda uma das habilidades mais valorizadas no mercado automotivo! Com o nosso Curso de Aplicação de Películas, você vai dominar as técnicas profissionais para aplicar películas automotivas, residenciais, comerciais e até películas de proteção solar com acabamento impecável e durabilidade garantida.
          </p>
          <div className="hero-ctas">
            <a href={PAYMENT_URL} className="btn btn-primary">Garantir minha vaga</a>
            <a href="#conteudo" className="btn btn-secondary">Ver conteúdo do curso</a>
          </div>
        </div>
        <aside className="hero-card">
          <div className="card card-hero pro">
            <div className="pro-head">
              <span className="pro-badge">OFERTA ESPECIAL</span>
              <span className="pro-sub">Acesso vitalício</span>
            </div>
            <div className="pro-body">
              <ul className="pro-list">
                <li><span className="pro-icon">🎓</span> +30 aulas práticas e objetivas</li>
                <li><span className="pro-icon">📁</span> Materiais para download</li>
                <li><span className="pro-icon">🗨️</span> Suporte para dúvidas</li>
              </ul>
              <div className="pro-price"><span className="label">Por apenas</span><span className="amount">R$ 2.500,00</span></div>
              <a href={PAYMENT_URL} className="btn btn-primary pro-cta">Comprar agora!</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero


