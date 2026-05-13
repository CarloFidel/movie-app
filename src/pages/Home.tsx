import { use } from "react";
import { ThemeContext } from "../assets/contexts/themes/ContextTheme";

export const Home = () => {

const context = use(ThemeContext)
console.log(context)

  return (
    <>
      <section className="relative flex flex-col items-center justify-center py-40 gap-10">
        <div className="mask-hero absolute inset-0 bg-[url('https://image.tmdb.org/t/p/w500//eRl6nmF8qb3q8cSoIHswnh97SI.jpg')] bg-cover bg-center opacity-30 rounded-3xl"></div>

        <h1 className="font-ma-medium text-indigo-950 dark:text-primary-400 text-8xl mask-b-from-0.5">
          CINEMATE
        </h1>
        <p className="font-ma-light text-center text-2xl w-2/3">
          Si vives como si estuvieras en una película, si siempre quieres ver un
          capítulo más o si sabes que el cine te puede cambiar la vida.{" "}
        </p>
        <form action="" className="flex flex-row mt-10 gap-2 z-1">
          <input
            type="text"
            id="email"
            placeholder="Tu mail"
            className="border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-l-2xl outline-none backdrop-blur bg-white/5"
          />
          <button className="dark:text-gray-400 px-4 py-2 rounded-r-2xl outline-none backdrop-blur bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-900 hover:cursor-pointer active:scale-95 transition duration-75">
            Empezar
          </button>
        </form>
      </section>
    </>
  );
};
