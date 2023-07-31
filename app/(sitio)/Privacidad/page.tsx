const Privacidad = () => {
    return (
        <div className="mx-10 py-10 text-zinc-900 dark:text-bone-100 gap-y-4 lg:gap-y-10">
            <div className="text-6xl font-bold">
                <h1 className="pb-4">Aviso de Privacidad</h1>
            </div>
            <div className="mx-20">
                <p className="text-">
                    El presente Aviso de Privacidad tiene como finalidad informarte
                    sobre el tratamiento que se le dará a tus datos personales cuando
                    accedas o utilices los servicios ofrecidos por <span className="font-bold">ECHOES</span>,
                    una página web dedicada a la venta de discos de vinilo y tornamesas.
                </p>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Responsable del tratamiento de datos personale</h2>
                <hr></hr>
                <h3 className="pt-2">
                    Datos personales que se recaban y finalidades del tratamiento
                </h3>
                    <br></br>
                    <br></br>
                <p>
                    Los datos personales que se recaban de ti son los siguientes:
                </p>
                <ul className="list-disc list-inside ml-6">
                    <li>Nombre y apellidos</li>
                    <li>Correo electrónico</li>
                    <li>Dirección postal</li>
                    <li>Teléfono</li>
                    <li className="mb-4">Datos de pago</li>
                </ul>
                <p>Estos datos se utilizan para las siguientes finalidades:</p>
                <br></br>
                <ul className="list-disc list-inside ml-6">
                    <li>Gestionar tu registro como usuario de la página web</li>
                    <li>Procesar y enviar tus pedidos</li>
                    <li>Dirección postal</li>
                    <li>Teléfono</li>
                    <li className="mb-4">Datos de pago</li>
                </ul>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Legitimación para el tratamiento de tus datos personales</h2>
                <hr></hr>
                <p className="pt-2">
                    La base legal para el tratamiento de tus datos personales es el
                    consentimiento que otorgas al aceptar este Aviso de Privacidad,
                    así como la ejecución del contrato de compraventa que se establece
                    entre tú y <span className="font-bold">ECHOES</span> cuando realizas un pedido.
                </p>
                <br></br>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Destinatarios de tus datos personales</h2>
                <hr></hr>
                <p className="pt-2">
                    Tus datos personales no serán cedidos a terceros, salvo que sea necesario 
                    para cumplir con las obligaciones legales o con tu consentimiento expreso.
                    <br></br>
                    No obstante, es posible que algunos de los proveedores de servicios de <span className="font-bold">ECHOES</span> 
                    (plataformas de pago o proveedores de hosting) tengan acceso a tus datos 
                    personales como encargados del tratamiento. En todo caso, estos proveedores 
                    actuarán conforme a las instrucciones de <span className="font-bold">ECHOES</span> y bajo las mismas 
                    medidas de seguridad y confidencialidad que se aplican a tus datos.
                </p>
                <br></br>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Conservación de tus datos personales</h2>
                <hr></hr>
                <p className="pt-2">
                    Tus datos personales se conservarán mientras mantengas tu relación con <span className="font-bold">ECHOES</span> 
                    y no solicites su supresión. Una vez finalizada dicha relación, se mantendrán 
                    bloqueados durante el plazo legal establecido para atender posibles responsabilidades 
                    derivadas del tratamiento.
                </p>
                <br></br>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Derechos sobre tus datos personales</h2>
                <hr></hr>
                <p className="pt-2">
                    Puedes ejercer los siguientes derechos sobre tus datos personales:
                </p>
                <ul className="list-disc list-inside ml-6">
                    <li>Acceder a ellos</li>
                    <li>Rectificarlos si son inexactos o incompletos</li>
                    <li>Suprimirlos o limitar su tratamiento si ya no son necesarios o si retiras tu consentimiento</li>
                    <li>Oponerte a su tratamiento por motivos relacionados con tu situación personal</li>
                    <li>Solicitar su portabilidad a otro responsable del tratamiento</li>
                    <li className="mb-4">Revocar tu consentimiento en cualquier momento</li>
                </ul>
                <p className="pt-2">
                    Para ejercer estos derechos, puedes enviar una solicitud por escrito
                     a la dirección postal o al correo electrónico indicados anteriormente, 
                     adjuntando una copia de tu documento de identidad o equivalente.
                     <br></br>
                    Asimismo, tienes derecho a presentar una reclamación ante la autoridad 
                    de control competente si consideras que el tratamiento de tus datos 
                    personales infringe la normativa aplicable.
                </p>
                <br></br>
                <h2 className="py-4 text-2xl lg:text-4xl font-bold">Modificaciones del Aviso de Privacidad</h2>
                <hr></hr>
                <p className="pt-2">
                    <span className="font-bold">ECHOES</span> se reserva el derecho a modificar este Aviso de Privacidad en 
                    cualquier momento, informándote previamente de los cambios que se 
                    produzcan. Te recomendamos que revises periódicamente este Aviso 
                    para estar al tanto de cómo se tratan y protegen tus datos personales.
                </p>
                <br></br>
                <h3>Fecha de última actualización: 27 de Julio del 2023</h3>
            </div>
        </div>
    );
}

export default Privacidad;