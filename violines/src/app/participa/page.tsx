import Image from "next/image";
import Aviso from "../components/aviso";
export default function Participa() {
  return (
    <main className="">
      <div className="bg-white h-full flex flex-col">
        <div className="flex flex-col p-12">
          <p className="text-3xl font-bold text-center">Nuestro contacto</p>
        </div>
        <div className="flex flex-col justify-center items-center p-2">
          <Image src="/images/participa2.jpg"
            alt="Participa"
            width={1000}
            height={500} />
          <div className="absolute mt-96 flex flex-row space-x-20">
            <div className="bg-azulfuerte flex flex-col w-60 h-56 rounded-lg shadow-xl">
              <div className="flex flex-row space-x-8 mt-20 justify-center items-center">
                <Image src="/images/instalogo.png" alt="Dar" width={70} height={100} />
                <Image src="/images/facelogo.png" alt="Dar" width={70} height={100} />
              </div>
              <p className="text-white text-2xl font-bold text-center mt-8">@vfpmexico</p>
            </div>
            <div className="bg-azulfuerte w-60 h-56 rounded-lg shadow-xl">
              <div className="flex flex-col justify-center items-center mt-12">
                <Image src="/images/gmail.png" alt="Dar" width={100} height={100} />
                <p className="text-white text-xl font-bold text-center mt-8">vfpmexico@gmail.com</p>
              </div>
            </div>
            <div className="bg-azulfuerte w-60 h-56 rounded-lg shadow-xl">
              <div className="flex flex-col justify-center items-center mt-12">
                <Image src="/images/telef.png" alt="Dar" width={100} height={100} />
                <p className="text-white text-xl font-bold text-center mt-8">555-555-5555</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aviso />
    </main>
  );
}