import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";
import Carousel1 from "./images/Carousel1.jpg";
import Carousel2 from "./images/Carousel2.jpg";
import Carousel3 from "./images/Carousel3.jpg";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <CarouselImage imageUrl={Carousel1} />
        <Carousel.Caption>
          <h3>Serene Backwaters of Alleppey</h3>
          <p>Cruise through tranquil waters, surrounded by lush greenery and charm.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <CarouselImage imageUrl={Carousel2} />
        <Carousel.Caption>
          <h3>Misty Hills of Munnar</h3>
          <p>Explore tea gardens and misty hills for a perfect retreat.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imageUrl={Carousel3} />
        <Carousel.Caption>
          <h3>Sun-Kissed Beaches of Kovalam</h3>
          <p>
          Relax on golden sands, embraced by the warm coastal breeze.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
