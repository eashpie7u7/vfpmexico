"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
export default function Comunidad() {
  return (
    <main className="">
      <div className="bg-white h-full flex flex-col">
        <div className="flex flex-col p-2">
        <p className="text-3xl font-bold text-center"> Comunidad</p>
        <p className="text-2xl font-semibold px-24 py-8">
        La labor de Violines Por La Paz es solo posible gracias al apoyo de
        instituciones y voluntarios, que colaboran con nosotros para llevar
        oportunidades de aprendizaje únicas a los niños mexicanos.
        </p>
        </div>
        <div className="flex flex-row items-center justify-center p-24">
          <div className="bg-azulfuerte flex flex-col p-8 w-full rounded-lg ">
            <p className="text-white font-bold text-3xl text-center">¿Deseas ayudar?</p>
            <p className="text-white font-bold text-3xl text-center p-2">¡Aquí te decimos cómo formar parte!
            </p>
            <div className="flex flex-row justify-center items-center space-x-32 p-8">
              <div>
                <Image src="/images/dar.png" alt="Dar" width={250} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">VOLUNTARIADO</p>
              </div>
              <div>
                <Image src="/images/empresa.png" alt="Dar" width={250} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">EMPRESA</p>
              </div>
              <div>
                <Image src="/images/escuela.png" alt="Dar" width={250} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">ESCUELA</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className=" w-full  overflow-hidden bg-white flex items-center justify-center  flex-col gap-4 py-4 ">
        <div className=" flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-gray-400 font-bold text-2xl">
            Nuestras <span className="text-pblue">ALIANZAS</span>
          </p>
          <Marquee className="w-full" gradient={true} autoFill={true}>
            <div className=" flex flex-row gap-40 mr-40">
              <Image
                src={`/images/teclogo.png`}
                width={200}
                height={200}
                alt="Do it right logo"
                className="max-w-[8rem]"
              />
              <Image
                src={`/images/panamericana.png`}
                width={300}
                height={300}
                alt="Do it right logo"
                className="max-w-[12rem] object-contain"
              />
              <Image
                src={`/images/ebc.png`}
                width={500}
                height={300}
                alt="Do it right logo"
                className="max-w-[12rem]"
              />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8 relative">
        <Image src="/images/maestro.png"
          alt="Maestro"
          width={900}
          height={800}
          style={{ borderRadius: '20px' }} />
        <div className="absolute  mt-96 left-1/2 transform -translate-x-1/2  flex flex-col justify-center items-center p-4"
          style={{
            width: '900px',
            height: '260px',
            backgroundColor: 'white',
            borderRadius: '20px',
            borderColor: 'black',
          }}>
          <div className="flex flex-col ">
            <p className="text-lg font-semibold mb-4">
              Como voluntario puedes desempeñarte a manera de docente en alguno de nuestros talleres,
              ayudarnos a expandir el proyecto o incluso tener un rol administrativo!
            </p>
            <p className="text-lg font-semibold">
              Si representas a una escuela primaria puede contactarnos para expandir
              el alcance de nuestros talleres con sus alumnos; o si es una Universidad,
              ser nuestro nexo para que sus alumnos realicen servicio social!
            </p>
          </div>

        </div>
      </div>


    </main>
  );
}