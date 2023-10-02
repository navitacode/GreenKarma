"use client";
import React, {useContext} from 'react'
import Link from 'next/link';
import { counterContext } from "@/app/context/counterContext";
const PedidoFinalizado = () => {


    // const handleOrders = async() =>{
    //     if (session) {
    //         const user = session.user.email
    //         if (user) {
    //             const response = await fetch("/api/pedidos", {
    //                 method: "POST",
    //                 body: JSON.stringify(carrito),
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             })
    //             if (response) {
    //                 if (response.ok == true && response.status == 200) {
    //                     const data = await response.json()
    //                     window.location.href = data.url
    //                 } else {
    //                     console.log("Error del Servidor");
    //                 }
    //             }
    //         }
    //     }
       
    // }

    return (
        <div>
            <div className='w-full'>
                <div className="grid grid-cols-1 mx-auto flex justify-center items-center text-center p-5 w-full bg-fixed bg-cover bg-center h-full"
                    style={
                        {
                            backgroundImage: "url('/karma_fondo2.png')"
                        }
                }>
                    <div className="text-white text-center text-5xl md:text-5xl sm:text-xl  mt-24">¡Gracias por comprometerte con nuestro planeta!</div>
                    <div className="text-white text-center text-4xl md:text-4xl sm:text-lg  mb-5">Te devolvemos $10MXN por cada botella Green Karma que regreses</div>
                </div>
                <div className="flex text-5xl items-center justify-center mt-24">¡Gracias por tu compra!</div>
                <div className="flex text-xl items-center justify-center">

                    <Link className="text-center text-white w-[50%] p-2
                                            rounded-lg bg-[#003c25] hover:bg-green-700
                                            focus:outline-none focus:border-green-500 mt-24 mb-10"
                        href={"/user"}>Ver Pedidos</Link>
                </div>
            </div>
        </div>
    )
}

export default PedidoFinalizado