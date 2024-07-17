import Image from "next/image";

export default function Modelo() {
  return (
    <main className="">
      <div className="bg-white  h-full flex flex-col">
        <p className="text-black font-bold text-3xl text-center py-8">El modelo</p>
        <div>
          <p className="text-left text-xl px-32">En Violines Por La Paz A.C. contamos con un modelo de aprendizaje único y de alto impacto,
            que busca desarrollar al máximo el talento del estudiante. Se divide en dos fases: exploración
            y desarrollo.</p>
        </div>
        <div className="flex flex-row justify-center items-center p-4 space-x-32 h-screen bg-white">
          <div className="w-1/3 h-[75vh] bg-azulclaro rounded-lg shadow-lg p-8">
            <p className="text-white text-4xl  text-center font-bold p-2"> Fase 1: Exploración</p>
            <Image src="/images/astronauta.png" alt="Artes" width={500} height={500} />
            <p className="text-white text-2xl mt-2">
              Los estudiantes tienen la oportunidad de
              experimentar los distintos talleres que
              se ofrecen. Esto les permite identificar
              los que más les llaman la atención y así
              encontrar su talento..</p>
          </div>
          <div className="w-1/3 h-[75vh] bg-azulclaro rounded-lg shadow-lg p-8" >
            <p className="text-white text-4xl font-bold text-center p-2">Fase 2: Desarrollo</p>
            <Image src="/images/artes.png" alt="Artes" width={500} height={500} />
            <p className="text-white text-2xl mt-2">
              Nuestros alumnos entran a una fase de desarrollo.
              Después de haber identificado su pasión y talentos,
              estos son cultividos a lo largo de un programa de
              tres semestres de duración.</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-azulfuerte w-1/2 aspect-square rounded-full flex  flex-col justify-center items-center">
            <Image src="/images/idiomas.jpg" alt="Idiomas" width={400} height={500} />
            <p className="text-white font-bold text-2xl p-8">Idiomas</p>
            <div className="flex flex-col px-24 py-4">
            <p className="text-white font-semibold text-xl text-center">
              En un mundo globalizado, es indespensable conocer otros lenguajes
              para ser capaz de comunicarse en distintas situaciones. Nuestros
              alumnos pueden aprender los siguientes idiomas:

            </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}