import Image from "next/image";
import React from "react";
import Aviso from "../components/aviso";

export default function Campaigns() {
    return (
        <main className="">
            <div className="bg-white flex flex-col h-full justify-center items-center p-12">
                <div className="flex flex-col p-12">
                    <p className="text-3xl font-bold text-center">Campañas</p>
                </div>
                <div className="grid grid-cols-3 gap-4 bg-azulfuerte w-5/6 p-12">
                    {Array(9).fill(0).map((_, index) => (
                        <div key={index} className="z-50 ">
                            <div className=" transition-transform duration-300 transform hover:scale-[1.5] origin-center">
                                <Image 
                                    src={`/images/campana${(index % 3) + 1}.png`} 
                                    alt="Violines por la paz" 
                                    width={400} 
                                    height={500}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Aviso/>
        </main>
    );
}