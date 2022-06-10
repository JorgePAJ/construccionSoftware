import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/solid";
import Logo from "./IJALTI.png";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useState } from "react";


function LoginEmpresaScreen() {

  const[login,setLogin]=useState({
    password:"",
    email:""
})


  const handleSubmit= async (e:any) =>{
            e.preventDefault();
            await axios.get('http://localhost:3000/api/clientes/login');
  };


  /*Esta funcion va a recibir informacion del input que se está typeando
    y desde ese inuput extraemos el e.target.name y el e.target.value*/
    
    const handleChange=({target:{name,value}}:{target:{name:any,value:any}})=>{
        setLogin({...login,[name]:value});
    }
    

  return (
      <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-auto w-auto"
                src="IJALTI.png"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
                Ingresa a tu cuenta
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}



                <Link href="/api/auth/signin">
                  <button
                    className="font-medium text-secondary hover:text-primary"
                  >
                    registrate
                  </button>
                </Link>


              </p>


            </div>
            <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px ">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="bg-buttonsecondary rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-t-md focus:outline-none focus:ring-secondary500 focus:border-secondary focus:z-10 sm:text-sm"
                    placeholder="Correo electronico"
                  onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-buttonsecondary appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-b-md focus:outline-none focus:ring-secondary500 focus:border-secondary focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  onChange={handleChange}/>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-secondary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="text-primary ml-2 block text-sm "
                  >
                    Recuerdame
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-secondary hover:text-primary"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <Link href="/dashboardEmpresa">
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-buttonprimary hover:bg-buttonsecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-buttonsecondary group-hover:text-buttonprimary"
                        aria-hidden="true"
                      />
                    </span>
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}

export default LoginEmpresaScreen