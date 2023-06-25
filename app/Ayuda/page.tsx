"use client"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import React, { useState, useEffect } from 'react';

const Ayuda = () => {


  return (

    <div className="md:w-1/2 mx-auto min-h-[500px] p-5 place-items-center">
    <h1 className="text-4xl text-center font-bold text-chocolate-900 dark:text-bone-100">
              ¿En qué puedo ayudarte?
            </h1>


      <div className="options mt-5 bg-bone-100 dark:bg-chocolate-900 p-4 rounded-lg shadow-lg dark:shadow-bone-100">
        <Accordion defaultActiveKey="0" flush className="bg-bone-100 dark:bg-chocolate-900">
          <Accordion.Item eventKey="0" className="bg-bone-100 dark:bg-chocolate-900 text-lg font-semibold">
            <Accordion.Header className="cursor-pointer text-magenta-900 dark:text-bone-100 rounded-md">
              <p className=" text-magenta-900 dark:text-beige-900">Cancelar compra</p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="text-gray-600 dark:text-beige-100 mt-3">
                Si deseas cancelar una compra, por favor sigue los siguientes pasos:
              </p>
              <ol className="list-decimal text-left mt-3 text-chocolate-900 dark:text-bone-300">
                <li>Ingresa a tu cuenta de usuario.</li>
                <li>Ve a la sección de "Mis pedidos".</li>
                <li>
                  Encuentra la compra que deseas cancelar y selecciona la opción de cancelación.
                </li>
                <li>
                  Sigue las instrucciones adicionales proporcionadas para completar el proceso de cancelación.
                </li>
              </ol>
              <p className="text-gray-600 mt-3">
                Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarnos.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="bg-bone-100 dark:bg-chocolate-800">
          <Accordion.Header className="cursor-pointer text-magenta-900 dark:text-bone-100 ">
          <p className=" text-magenta-900 dark:text-beige-900">Devoluciones y rembolsos</p>
          </Accordion.Header>
            <Accordion.Body>
              <p className="text-gray-600 mt-3">
                Si deseas realizar una devolución y solicitar un reembolso,
                sigue los pasos a continuación:
              </p>
              <ol className="list-decimal text-left mt-3">
                <li>
                  Comunícate con nuestro servicio de atención al cliente dentro
                  de los 30 días posteriores a la compra.
                </li>
                <li>
                  Proporciona los detalles de tu compra y explica la razón de la
                  devolución.
                </li>
                <li>
                  Recibirás instrucciones sobre cómo proceder con la devolución
                  y el reembolso.
                </li>
                <li>
                  Envía el artículo de vuelta siguiendo las instrucciones
                  proporcionadas.
                </li>
                <li>
                  Una vez que recibamos el artículo devuelto, procesaremos el
                  reembolso según nuestra política de devoluciones.
                </li>
              </ol>
              <p className="text-gray-600 mt-3">
                Si tienes alguna pregunta o necesitas más información, no dudes
                en contactarnos.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="bg-bone-100 dark:bg-chocolate-800">
            <Accordion.Header>
            <p className=" text-magenta-900 dark:text-beige-900">Preguntas frecuentes sobre compras</p>
            </Accordion.Header>
            <Accordion.Body>
              <h4 className="text-lg text-black font-medium">
                1. ¿Cuál es el proceso de compra?
              </h4>
              <p className="text-gray-600 mt-2">
                Para realizar una compra, sigue estos pasos:
              </p>
              <ol className="list-decimal ml-5 mt-2">
                <li>
                  Selecciona los productos que deseas comprar y agrégalos al
                  carrito de compras.
                </li>
                <li>Revisa el resumen de tu pedido y procede al pago.</li>
                <li>Proporciona la información de envío y pago necesaria.</li>
                <li>Confirma tu pedido y realiza el pago.</li>
                <li>
                  Recibirás una confirmación de tu compra y el número de
                  seguimiento del envío si aplica.
                </li>
              </ol>
              <h4 className="text-lg text-black font-medium mt-5">
                2. ¿Cuáles son las opciones de pago disponibles?
              </h4>
              <p className="text-gray-600 mt-2">
                Aceptamos varias formas de pago, incluyendo tarjetas de crédito,
                transferencias bancarias y pagos en línea a través de
                plataformas seguras.
              </p>
              <h4 className="text-lg text-black font-medium mt-5">
                3. ¿Cuánto tiempo tarda en llegar mi pedido?
              </h4>
              <p className="text-gray-600 mt-2">
                El tiempo de entrega puede variar según tu ubicación y el método
                de envío seleccionado. Por lo general, los pedidos son
                procesados y enviados dentro de 1-3 días hábiles.
              </p>
              <h4 className="text-lg text-black font-medium mt-5">
                4. ¿Puedo realizar cambios o devoluciones?
              </h4>
              <p className="text-gray-600 mt-2">
                Sí, ofrecemos opciones de cambios y devoluciones. Consulta
                nuestra política de cambios y devoluciones para obtener más
                detalles y seguir el procedimiento adecuado.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Ayuda;
