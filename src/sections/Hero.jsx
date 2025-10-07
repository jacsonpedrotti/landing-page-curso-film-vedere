import React from 'react'

const PAYMENT_URL = import.meta.env.VITE_PAYMENT_URL || '#'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Curso de aplicação de películas automotivas</h1>
          <p>
            Curso Profissional de Aplicação de Películas – Do Zero ao Avançado
            <br /><br />
            Aprenda uma das habilidades mais valorizadas e lucrativas do setor automotivo!
            <br /><br />
            Com o nosso Curso de Aplicação de Películas Automotivas, você vai dominar desde as técnicas básicas até os métodos mais avançados de aplicação, garantindo um acabamento perfeito, com alta durabilidade e aspecto profissional.
            <br /><br />
            E o melhor: você aprenderá a aplicar películas sem precisar desmontar partes do veículo — uma técnica exclusiva, prática e altamente procurada no mercado, mas que poucos profissionais realmente dominam.
            <br /><br />
            Seja você iniciante ou já atuante na área, este curso foi desenvolvido para levar suas habilidades a um novo nível e abrir portas para novas oportunidades de renda e crescimento.
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
              <div className="pro-price"><span className="label">Por apenas</span><span className="amount">R$ 247,00</span></div>
              <a href={PAYMENT_URL} className="btn btn-primary pro-cta">Comprar agora!</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero


