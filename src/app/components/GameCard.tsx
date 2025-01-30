import Link from "next/link";

interface GameCardProps {
  game: string;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div key={game} className="relative h-full min-w-full">
      <Link
        href={`/games/${game}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
      >
        {game}
      </Link>
      <iframe
        src={`/games/${game}`}
        className="overflow-hidden"
        style={{
          width: "100%",
          height: "100svh",
          border: "none",
        }}
      />
    </div>
  );
};

export default GameCard;
