import React from "react"
import Carousel from 'react-bootstrap/Carousel'

const CustomCarousel = ({ proyecto }) =>
    <Carousel className='carousel' variant={proyecto?.variant}>
        {proyecto?.imgSrc?.map((imagen, i)=>
            <Carousel.Item key={i}>
                <img className="d-block w-100 carouselImage" src={imagen} alt={imagen} />
            </Carousel.Item>
        )
        }
    </Carousel>

export default CustomCarousel
