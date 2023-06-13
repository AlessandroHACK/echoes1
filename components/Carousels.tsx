'use client'
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const Carousels = () => {
    return ( 
        <div>
            <Carousel>
          <Carousel.Item>
            <Image
              width={900}
              height={350}
              className="d-block w-100"
              src="/img/sali1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width={600}
              height={0}
              className="d-block w-100"
              src="/img/sali2.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              width={900}
              height={350}
              className="d-block w-100"
              src="/img/sali2.jpg"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
     );
}
 
export default Carousels;