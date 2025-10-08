import React from 'react'

const VIDEO_URL = '/assets/video-intro-vedere.mp4'

function Content() {
  return (
    <section id="conteudo" className="content">
      <div className="container">
        <div className="content-grid">
          <div className="content-copy">
        <h2 className="section-title">Conteúdo do curso</h2>
            <p className="content-description">
              Do básico ao avançado: aprenda técnicas profissionais para aplicação de películas automotivas,
              com foco em prática, acabamento e qualidade de entrega.
            </p>
            <ul className="content-list">
              <li>Fundamentos das películas e tipos</li>
              <li>Ferramentas essenciais e preparação</li>
              <li>Técnicas automotivas: corte, aplicação e acabamento</li>
              <li>Aplicação sem desmontar: métodos para evitar remoção de forros e acabamentos</li>
              <li>Comece seu próprio negócio</li>
              <li>Atendimento ao cliente e precificação</li>
            </ul>
          </div>
          <div className="content-video">
            <div className="video-wrapper">
              <video
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content


