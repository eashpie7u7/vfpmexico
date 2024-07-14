import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-azulclaro h-full flex flex-col">
        <div className="flex flex-row w-full">
          <div className="w-2/5 p-4 flex flex-row justify-center items-center">
            <p className="text-5xl font-bold  text-white p-60 text-center" >
              ¡TODOS TENEMOS TALENTO, SÓLO FALTA ENCONTRARLO!
            </p>
          </div>
          <div className="w-3/5 relative">
            <div className="h-full">
              <Image
                src="/images/grupal.png"
                alt="Violines por la paz"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center p-24">
          <div className="bg-azulfuerte flex flex-col p-8 w-full rounded-lg ">
            <div className="flex flex-row">
              <div className="flex flex-col justify-center w-2/5 p-8">
                <p className="text-white text-4xl font-bold py-8">Nuestra labor</p>
                <p className="text-white text-2xl">Violines Por La Paz A.C es una escuela del talento, donde
                  ayudamos a nuestros alumnos a desarrollar sus propias
                  herramientas para salir adelante en el futuro. Proporcionamos
                  una formación basada en los valores, el arte y la comunicación,
                  por medio de talleres poco comunes en las escuelas.</p>
              </div>

              <div className="flex flex-col justify-center items-center w-3/5">
                <Image
                  src="/images/dosniños.jpg"
                  alt="Niños sonriendo a la cámara"
                  width={550}
                  height={550}
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>

          </div>
        </div>

        <div className="bg-slate-100">
          <p className="font-bold text-2xl text-center">Nuestra historia</p>
          <div className="flex flex-row space-x-32 px-24 py-60 justify-center items-center ">
            <div className="bg-azulclaro rounded-lg w-44 p-8">
              <p className="text-white text-center font-bold text-5xl">2015</p>
            </div>
            <div className="bg-azulclaro rounded-lg w-44 p-8">
              <p className="text-white text-center font-bold text-5xl">2016</p>
            </div>
            <div className="bg-azulclaro rounded-lg w-44 p-8">
              <p className="text-white text-center font-bold text-5xl">2017</p>
            </div>
            <div className="bg-azulclaro rounded-lg w-44 p-8">
              <p className="text-white text-center font-bold text-5xl">2018</p>
            </div>
          </div>

          <p>
            Violines Por la Paz A.C. es una asociación civil sin fines de lucro
            que inició labores en el 2015 como grupo estudiantil del Tecnológico de
            Monterrey Campus Tampico.

            Desde entonces, nuestro objetivo es brindar herramientas de
            aprendizaje a niños de escasos recursos de entre seis y trece años
            a fin de que encuentren su pasión y su talento y lo desarrollen.

            Fue hasta el año 2018 que fue constituida como asociación civil
            contando actualmente con presencia en Tampico, Madero, Altamira y
            Ciudad de México.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center p-4 space-x-32 h-screen bg-white">
          <div className="w-1/3 h-96 bg-azulfuerte rounded-lg shadow-lg p-8">
            <p className="text-white text-2xl font-bold p-2"> Misión</p>
            <p className="text-white text-xl">Formar y guiar a nuestros niños, niñas y adolescentes del país a
              encontrar su pasión y su talento a través del arte, la cultura, los
              deportes y el desarrollo de habilidades desconocidas para ellos,
              mismas que les permitan sobresalir en los ámbitos estudiantil,
              académico, laboral y sobre todo como seres humanos de excelencia.</p>
          </div>
          <div className="w-1/3 h-96 bg-azulfuerte rounded-lg shadow-lg p-8" >
            <p className="text-white text-2xl font-bold p-2"> Visión</p>
            <p className="text-white text-xl">Ser una institución formadora líder de jóvenes, niñas y niños con
              talento, pasión y humanidad.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
