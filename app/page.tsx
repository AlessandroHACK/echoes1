'use client'
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { auto } from "@popperjs/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SSRProvider from 'react-bootstrap/SSRProvider';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
        <SSRProvider>
        <Carousel>
          <Carousel.Item>
            <img
              
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
            <img
              
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
            <img
              
              className="d-block w-100"
              src="/img/sali1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
         </Carousel>
        </SSRProvider>
    </div>
  );
}