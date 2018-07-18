import React from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Home = () => {
  return (
    <CarouselProvider
      autoPlay={true}
      interval="200"
      // autoplayinterval="200"
      naturalSlideWidth="50"
      naturalSlideHeight="20"
      totalSlides="3">
      <Slider>
        <Slide index={0}><img src="https://i.imgur.com/eWTj4EF.jpg" className="home-slide-images" /></Slide>
        <Slide index={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_0Y6dxZsquZzYZBFPYIZ0Okv5Hww5cUvH2LZdjbR7kEC9uuXHA" className="home-slide-images" /></Slide>
        <Slide index={2}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSOipr8P5FcgCUfj0qZAHCozR2mkh0gSZG6l69Q0PIgLDtXB2" className="home-slide-images" /></Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Home;
