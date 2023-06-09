import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import { auto } from "@popperjs/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Layout pagina="Inicio">
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

        <h1 className="text-center color-black mt-5">Lo más reciente </h1>
        <div className="cartitas mt-5 flex flex-wrap justify-center">
         
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
              <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="cartitas mt-5 flex flex-wrap justify-center">
         
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
              <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="carta1 mx-4">
            <Card style={{ width: "18rem" }}>
            <Image
                variant="top"
                src="/img/disco1.jpg"
                width={287}
                height={180}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  );
}
