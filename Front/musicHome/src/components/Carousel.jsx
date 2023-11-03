import React from 'react'

export const Carousel = () => {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="src\assets\BannerPiano.svg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src\assets\BannerViolin.svg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="src\assets\BannerDrums.svg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExample" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExample" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}
