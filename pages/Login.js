import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos a un servidor
    console.log("Email:", email);
    console.log("Password:", password);
    // Reiniciar los campos
    setEmail("");
    setPassword("");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-mainbg bg-cover">
      <title>Echoes - Login</title>
      <div className="bg-white shadow-md rounded-md px-6 py-8 w-80">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image width={200} height={100} src="/img/Echoes-logo-b.png" />
          </Link>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded hover:bg-white hover:text-black hover:border-black border-2"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            ¿Tienes cuenta?{" "}
            <Link href="/Register" className="text-blue-500">
              Crear cuenta
            </Link>
          </p>
          <p className="text-gray-700">
            ¿Olvidaste tu contraseña?{" "}
            <Link href="/PasswordRecovery" className="text-blue-500">
              Recuperar contraseña
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
