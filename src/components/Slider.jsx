
import picone from '../images/picone.jpg'
import pictwo from '../images/pictwo.jpg'
import picthree from '../images/picthree.jpg'
import picfour from '../images/picfour.jpg'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {

  const pics = [
    {
      image: picone,
      id: 1
    },
    {
      image: pictwo,
      id: 2
    },
    {
      image: picthree,
      id: 3
    },
    {
      image: picfour,
      id: 4
    }
  ]

  return (
    
    <Carousel>
      {pics.map(pic => 
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic.image}
          alt="pics"
        />
      </Carousel.Item>
      )}
    </Carousel>
  );
}

export default Slider;


