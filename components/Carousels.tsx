'use client'
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Carousels = () => {
  return (
    <div className="w-full mx-auto ">
      <Carousel>
        <Carousel.Item>
            <div className="relative w-full h-[400px] flex-[0_0_100%]">
            <Image
              className="object-cover backdrop-brightness-50"
              src="/img/CAROUSEL-US.png"
              alt="First slide"
              fill
            />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="relative w-full h-[400px] flex-[0_0_100%]">
            <Image
              className="object-cover"
              src="/img/CAROUSEL2.jpg"
              alt="First slide"
              fill
            />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className="relative w-full h-[400px] flex-[0_0_100%]">
            <Image
              className="object-cover"
              src="/img/CAROUSEL1.jpg"
              alt="First slide"
              fill
            />
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;