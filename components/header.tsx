'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import { RiLoginBoxLine } from 'react-icons/ri';
import { RiShoppingCartLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from '@/hooks/useUser';
import useLoadUser from '@/hooks/useLoadUser';
import {toast} from "react-hot-toast"

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const user= useUser();
  const userPath = useLoadUser(user.userDetails);

  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    setOpen(!open);
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Sesión cerrada');
    }
  }


  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black">
      <div className="bg-beige-100 dark:bg-chocolate-900">
      {user.userDetails !== null ? (
        <Navbar expand="lg">
          <Container fluid>
            <Link href={'/'} >
              <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover'>
              </div>
            </Link>

            <Navbar.Toggle aria-controls="navbarScroll" className=' text-chocolate-900 dark:bg-magenta-200 dark:text-bone-100' />
            <Navbar.Collapse id="navbarScroll" className=' text-bone-900 dark:text-bone-100'>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link href="/" className='lg:self-center text-chocolate-900 dark:text-bone-100 py-2 lg:p-3'>
                  Inicio
                </Link>
                <Link href="/Ayuda" className='lg:self-center text-chocolate-900 dark:text-bone-100 py-2 lg:p-3'>
                  Ayuda
                </Link>
                <NavDropdown
                  title={
                    <span className='text-chocolate-900 dark:text-bone-100'>Categorías</span>
                  }
                >
                  <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                    <Link href="/Vinilos">
                      Vinilos
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                    <Link href="/Tornamesas">
                      Tornamesas
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider className='hover:bg-chocolate-100/30' />
                  <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                    <Link href="/Accesorios">
                      Accesorios
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Link href="/Carrito" className="flex items-center ">
                  <RiShoppingCartLine className="mr-1 h-6 w-6 text-zinc-950 dark:text-bone-100" />
                </Link>
              </Nav>
              <div className="lg:mx-[30px] sm:mx-0 lg:mt-0 sm:mt-3 w-[40px] relative mt-6">
                <div className="relative">
                  {user.userDetails?.avatar_url !== null ? (
                    <div className="w-[40px] h-[40px] aspect-square overflow-hidden">
                      <Image
                        onClick={() => setOpen(!open)}
                        fill
                        alt="Foto de perfil"
                        src={userPath || '/public/img/Echoes-logo-b.png'}
                        className="object-cover border-2 border-white rounded-full cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center">
                      <RiUserLine onClick={() => setOpen(!open)} className="w-[40px] h-[40px] text-gray-400 cursor-pointer" />
                    </div>
                  )}
                  {open && (
                    <div className="bg-bone-100 dark:bg-chocolate-500 p-1 w-auto shadow-lg absolute left-0 lg:-left-14 mt-4 sm:mt-6 md:mt-0 rounded-md items-center z-10">
                      <ul className="py-2 overflow-y-auto max-h-60 sm:max-h-screen border-black">
                        <li
                          onClick={() => setOpen(false)}
                          className="p-2 text-lg px-4 items-center cursor-pointer rounded hover:bg-magenta-400 flex flex-row"
                        >
                          <Link href="/Perfil" className="flex items-center dark:text-bone-100  text-chocolate-800">
                            <RiUserLine className="mr-1 h-4 w-4" />
                            <span className=''>Perfil</span>
                          </Link>
                        </li>
                        <li
                          onClick={handleLogout}
                          className="dark:text-bone-100  text-chocolate-800 p-2 text-lg px-4 items-center cursor-pointer rounded hover:bg-magenta-400 flex flex-row gap-x-2"
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
          <Navbar expand="lg" >
            <Container fluid>
              <Link href={'/'}>
                <div className='bg-image-one dark:bg-image-two h-[55px] w-[195px] bg-cover cursor-pointer'>

                </div>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" className='bg-bone-200 dark:bg-magenta-100 text-chocolate-900 dark:text-bone-100' />
              <Navbar.Collapse id="navbarScroll" className='text-chocolate-900 dark:text-bone-100'>
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Link href="/" className='lg:self-center text-chocolate-900 dark:text-bone-100 py-2 lg:p-3'>
                    Inicio
                  </Link>
                  <Link href="/Ayuda" className='lg:self-center text-chocolate-900 dark:text-bone-100 py-2 lg:p-3'>
                    Ayuda
                  </Link>
                  <NavDropdown
                    title={
                      <span className='text-chocolate-900 dark:text-bone-100'>Categorías</span>
                    }
                  >
                    <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                      <Link href="/Vinilos">
                        Vinilos
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                      <Link href="/Tornamesas">
                        Tornamesas
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider style={{ backgroundColor: "black" }} />
                    <NavDropdown.Item className='hover:bg-chocolate-100/30'>
                      <Link href="/Accesorios">
                        Accesorios
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>


                </Nav>
                <Link className='lg:mx-[30px] lg:my-0 sm:mx-0 my-3 ' href="/Login">
                  <RiLoginBoxLine className="mr-1 h-6 w-6  text-chocolate-900 dark:text-bone-100" />
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </div>
    <div>
      {children}
    </div>
    </div>
  );
};

export default Header;