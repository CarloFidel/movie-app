import { useNavigate } from "react-router";
import type { CastElement } from "../../interfaces/cast.interface";

interface Props {
  actor: CastElement;
}

export const ActorCard = ({ actor }: Props) => {
  const navigate = useNavigate();

  const handleCardClick = (actorId: number) => {
    navigate(`/detail/${actor.id}`);
    console.log(`Actor seleccionado: ${actorId}`);
  };

  return (
    <div
      className="shrink-0 w-45 mr-4 flex flex-col gap-2 hover:cursor-pointer"
      key={actor.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
        alt={actor.name}
        className="aspect-square rounded-full object-cover shadow-lg shadow-gray-700/70 hover:scale-102 hover:shadow-xl dark:shadow-indigo-950/60 transition duration-200"
        onClick={() => handleCardClick(actor.id)}
      ></img>
      <div className="flex justify-between items-center pr-4">
        <h2 className="text-start w-30">{actor.name}</h2>
      </div>
    </div>
  );
};
