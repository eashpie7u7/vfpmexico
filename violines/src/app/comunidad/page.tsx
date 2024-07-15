"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from "react";
export default function Comunidad() {
  return (
    <main className="">
      <div className="bg-white h-screen flex flex-col">
        <div className="flex flex-row items-center justify-center p-24">
          <div className="bg-azulfuerte flex flex-col p-8 w-full rounded-lg ">
            <p className="text-white font-bold text-3xl text-center">¿Deseas ayudar?</p>
            <p className="text-white font-bold text-3xl text-center p-2">¡Aquí te decimos cómo formar parte!
            </p>
            <div className="flex flex-row justify-center items-center space-x-32 p-12">
              <div>
                <Image src="/images/dar.png" alt="Dar" width={200} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">VOLUNTARIADO</p>
              </div>
              <div>
                <Image src="/images/empresa.png" alt="Dar" width={200} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">EMPRESA</p>
              </div>
              <div>
                <Image src="/images/escuela.png" alt="Dar" width={200} height={100} />
                <p className="text-white text-4xl font-bold p-8 text-left">ESCUELA</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className=" w-full  overflow-hidden bg-white flex items-center justify-center  flex-col gap-4 py-4">
            <div className=" flex flex-col items-center justify-center gap-4 w-full">
              <p className="text-gray-400 font-bold text-2xl">
                Con la <span className="text-pblue">CONFIANZA</span> de
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
    </main>
  );
}