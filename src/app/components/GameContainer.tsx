import { getGames } from "~/lib/getGames";
import GameCard from "./GameCard";
import Link from "next/link";

const GameContainer = () => {
  const games = getGames();

  let carouselActive: boolean = true;

  return (
    <>
      {games.map((game) => (
        <GameCard key={game} game={game} />
      ))}
    </>
  );
};

export default GameContainer;
