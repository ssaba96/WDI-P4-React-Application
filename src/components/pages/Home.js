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
        <Slide index={0}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmF0F9qF0K4yLFIG7RPgDLdaM68SzFJBC9ieCTos0-021gPebu" className="home-slide-images" /></Slide>
        <Slide index={1}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY5hWEYp6cYfA5tpqxIjK_LIW5CB1UOAWJ5ZB3Q0BMiZ1UvpABHA" className="home-slide-images" /></Slide>
        <Slide index={2}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg1XNEbdVPe_NWxwMN7Y7Mf4ULmsvUENSINgvblsQ5Tn58focMA" className="home-slide-images" /></Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Home;
