import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import { auto } from "@popperjs/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useSWR from 'swr'

const fetcher = async() => {
  const response = await fetch('http://localhost:3000/api/albums')
  const data = await response.json()
  return data
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const{data, error} = useSWR('albums', fetcher, {refreshInterval: 1000})
    if(error) return 'An error has ocurred'
    if(!data) return 'Loading...'
    console.log(data)
    
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
        <div className="mt-5 flex flex-wrap justify-center">
         
          
          <div className="mx-4 hover:scale-105 ease-out duration-100 cursor-pointer">
         
            <Card>
              <Card.Img
                variant="top"
                src="/img/disco1.jpg"
                width={30}
                height={3000}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  xd.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          
          
          
          
        </div>
      </Layout>
    </div>
  );
}
