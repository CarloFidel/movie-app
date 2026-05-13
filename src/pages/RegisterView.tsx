import { useNavigate } from "react-router";

export const RegisterView = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-10">
      <h2 className="text-3xl text-center text-gray-400 mb-2">Crear cuenta</h2>

      <form className="backdrop-blur bg-white/5 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 border border-gray-300 dark:border-gray-700">
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
          required
        />
        <button
          type="submit"
          className="bg-primary-300 dark:text-gray-800 hover:cursor-pointer font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none active:scale-95 transition duration-75"
        >
          Registrarse
        </button>
        <p
          className="text-center font-ma-light text-sm hover:cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Inicia sesión
        </p>
      </form>
    </section>
  );
};
