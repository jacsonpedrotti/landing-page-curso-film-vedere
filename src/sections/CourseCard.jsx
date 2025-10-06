import React from 'react'

function CourseCard() {
  return (
    <section className="course-card-section">
      <div className="container">
        <div className="course-card">
          <img className="course-card-logo" src="/assets/logo-simples.png" alt="Logo do curso" />
          <p className="course-card-desc">Curso completo de aplicação de películas com acesso vitalício e suporte.</p>
          <div className="course-card-price">
            <span className="label">Por apenas</span>
            <span className="amount">R$ 2.500,00</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseCard



