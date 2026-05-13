import { use } from "react";
import { ThemeContext } from "../contexts/themes/ContextTheme";

export const Home = () => {

const context = use(ThemeContext)
console.log(context)

  return (
    <>
      <section className="relative flex flex-col items-center justify-center py-40 gap-10">
        <div className="double-mask absolute inset-0 bg-[url('https://image.tmdb.org/t/p/w500//eRl6nmF8qb3q8cSoIHswnh97SI.jpg')] bg-cover bg-center opacity-30 rounded-3xl"></div>

        <h1 className="font-ma-black text-6xl mask-b-from-0.5">
          Si es cine, es CINEMATE
        </h1>
        <p className="text-center text-2xl w-2/3">
          Si vives como si estuvieras en una película, si siempre quieres ver un
          capítulo más o si sabes que el cine te puede cambiar la vida.{" "}
        </p>
        <form action="" className="flex flex-row mt-10 gap-2 z-1">
          <input
            type="text"
            placeholder="Tu mail"
            className="border border-primary-800 px-4 py-2 rounded-l-2xl outline-none"
          />
          <button className="border-2 border-bg-dark px-4 py-2 rounded-r-2xl outline-none bg-primary-200  text-gray-900 hover:cursor-pointer active:scale-95 transition duration-75">
            Empezar
          </button>
        </form>
      </section>
    </>
  );
};
