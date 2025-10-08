import React from 'react'

const CHAMPIONSHIP_VIDEO_URL = '/assets/video-camp.mp4'

function ChampionshipVideo() {
  return (
    <section className="championship-video">
      <div className="container">
        <h2 className="section-title">Quer ser um profissional destacado?</h2>
        <div className="championship-video-wrapper">
          <video
            src={CHAMPIONSHIP_VIDEO_URL}
            autoPlay
            loop
            muted
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  )
}

export default ChampionshipVideo
