import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import './Slider.module.css'

const Slider = () => {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src={image1} className="d-block w-100 vh-100 " height={500} alt="..."/>
                    </div>
                    <div className="carousel-item" >
                        <img src={image2} className="d-block w-100 vh-100 " height={500} alt="..."/>
                    </div>
                    <div className="carousel-item" >
                        <img src={image3} className="d-block w-100 vh-100 " height={500} alt="..."/>
                    </div>
                    <div className="carousel-item" >
                        <img src={image4} className="d-block w-100 vh-100 " height={500} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider
