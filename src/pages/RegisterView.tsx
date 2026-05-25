import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const RegisterView = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-10 w-5xl">
      <h2 className="text-3xl text-center text-gray-400 mb-2">Crear cuenta</h2>

      <form
        onSubmit={onSubmit}
        className="backdrop-blur bg-white/5 p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-6 border border-gray-300 dark:border-gray-700"
      >
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
            {...register("fullName", {
              required: {
                value: true,
                message: "El nombre no puede estar vacío",
              },
              pattern: {
                value: /^[A-ZÀ-ÖØ-Þ][a-zA-ZÀ-ÿ\s]{1,39}$/,
                message: "El nombre no es válido",
              },
            })}
          />
          {errors.fullName && (
            <span className="text-red-500  dark:text-red-300 text-[12px] ml-2 mt-1">
              {String(errors.fullName.message)}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
            {...register("email", {
              required: {
                value: true,
                message: "El nombre no puede estar vacío",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "El correo no es válido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 dark:text-red-300 text-[12px] ml-2 mt-1">
              {String(errors.email.message)}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-primary-100/2 border border-gray-300 dark:border-none backdrop-blur font-ma-light text-sm dark:border-gray-700 px-4 py-3 rounded-2xl outline-none"
            {...register("password", {
              required: {
                value: true,
                message: "El nombre no puede estar vacío",
              },
              pattern: {
                value:
                  /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message:
                  "La contraseña debe incluir mayúsculas, minúsculas y al menos un número o símbolo",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500  dark:text-red-300 text-[12px] ml-2 mt-1">
              {String(errors.password.message)}
            </span>
          )}
        </div>

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
