import Image from "next/image";
import React from "react";
export default function Campaigns() {
    return (
        <main className="">
            <div className="bg-white flex flex-col h-full justify-center items-center">
              <div className="flex flex-col p-12">
                <p className="text-3xl font-bold text-center">Campañas</p>
              </div>
                <div className="grid grid-cols-3 grid-rows-3 bg-azulfuerte w-5/6 p-12 space-y-4 ">
                    {Array(3).fill(0).map((_, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <Image src="/images/campana1.png" alt="Violines por la paz" width={400} height={500} />
                            <Image src="/images/campana2.png" alt="Violines por la paz" width={400} height={500} />
                            <Image src="/images/campana3.png" alt="Violines por la paz" width={400} height={500} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
}
