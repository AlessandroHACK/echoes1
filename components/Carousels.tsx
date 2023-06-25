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
              <h3 className=" text-3xl font-bold">Avenged Sevenfold regresa</h3>
              <p className="text-lg font-semibold">Después de 7 años, lanzan un nuevo álbum</p>
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
            <h3 className=" text-3xl font-bold">Watching Movies with the Sound Off</h3>
              <p className="text-lg font-semibold">Cumple su décimo aniversario</p>
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
              <h3 className=" text-3xl font-bold">The Dark Side of the Moon</h3>
              <p className="text-lg font-semibold">Cumple 50 años este 2023</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;