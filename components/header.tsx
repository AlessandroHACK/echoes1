'use client'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import {RiLoginBoxLine} from 'react-icons/ri';
import { RiShoppingCartLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";

const Header = () => {
  const { session } = useSessionContext();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    setOpen(!open);
    router.refresh();

    if (error) {
      console.log(error.message);
    } else {
      console.log('Sesión cerrada');
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {session ? (
        <Navbar bg="black" expand="lg" variant="dark">
          <Container fluid>
            <Link href="/">
              <Image
                alt="Hola"
                width={200}
                height={100}
                src="/img/Echoes-logo-w.png"
              />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link href="/" className='lg:self-center text-white py-2 lg:p-3'>
                  Inicio
                </Link>
                <Link href="/Ayuda" className='lg:self-center text-white py-2 lg:p-3'>
                  Ayuda
                </Link>
                <NavDropdown
                  title="Categorías"
                  id="navbarScrollingDropdown"
                  style={{ color: 'white' }}
                >
                  <NavDropdown.Item>
                    <Link href="/Vinilos">
                      Vinilos
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/Tornamesas">
                      Tornamesas
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider style={{ backgroundColor: "black" }} />
                  <NavDropdown.Item>
                    <Link href="/Accesorios">
                      Accesorios
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Link href="/" className="flex items-center text-white">
                  <RiShoppingCartLine className="mr-1 h-6 w-6" />
                </Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                    variant="dark"
                    className='border-white'
                  >
                    Buscar
                  </Button>
              </Form>
              <div className="lg:mx-[30px] sm:mx-0 lg:mt-0 sm:mt-3 relative mt-6">
                <div className="relative">
                  <Image
                    onClick={() => setOpen(!open)}
                    width={40}
                    height={40}
                    alt="Foto de perfil"
                    src="/img/erick.jfif"
                    className="foto-perfil border-2 border-white rounded-full cursor-pointer"
                  />
                  {open && (
                    <div className="bg-white p-1 w-auto shadow-lg absolute left-0 lg:-left-14 mt-4 sm:mt-6 md:mt-0 rounded-md items-center z-10">
                      <ul className="py-2 overflow-y-auto max-h-60 sm:max-h-screen border-black">
                        <li
                          onClick={() => setOpen(false)}
                          className="p-2 text-lg px-4 items-center cursor-pointer rounded hover:bg-gray-100 flex flex-row"
                        >
                          <Link href="/Perfil" className="flex items-center">
                            <RiUserLine className="mr-1 h-4 w-4" />
                            <span>Perfil</span>
                          </Link>
                        </li>
                        <li
                          onClick={handleLogout}
                          className="p-2 text-lg px-4 items-center cursor-pointer rounded hover:bg-gray-100 flex flex-row gap-x-2"
                        >
                          <RiLogoutBoxRLine className="mr-1 h-4 w-4" />
                          Salir
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      ) : (
        <>
          <Navbar bg="black" expand="lg" variant="dark">
            <Container fluid>
              <Link href="/">
                <Image alt="Hola" width={200} height={100} src="/img/Echoes-logo-w.png" />
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Link href="/" className='lg:self-center text-white py-2 lg:p-3'>
                    Inicio
                  </Link>
                  <Link href="/Ayuda" className='lg:self-center text-white py-2 lg:p-3'>
                    Ayuda
                  </Link>
                  <NavDropdown
                    title="Categorías"
                    id="navbarScrollingDropdown"
                    style={{ color: 'white' }}
                  >
                    <NavDropdown.Item>
                      <Link href="/Vinilos">
                        Vinilos
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link href="/Tornamesas">
                        Tornamesas
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider style={{ backgroundColor: "black" }} />
                    <NavDropdown.Item>
                      <Link href="/Accesorios">
                        Accesorios
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>


                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button
                    variant="dark"
                    className='border-white'
                  >
                    Buscar
                  </Button>

                </Form>
                <Link className='lg:mx-[30px] lg:my-0 sm:mx-0 my-3 text-white' href="/Login">
                <RiLoginBoxLine className="mr-1 h-6 w-6" />
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </div>
  );
};

export default Header;