import { getGames } from "~/lib/getGames";

const GameContainer = () => {
  const games = getGames();
  console.log("Games from get: ", games);
  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game}>
            <h2>Inside Container</h2>
            <a
              href={`/games/${game}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {game}
            </a>
            <iframe
              src={`/games/${game}`}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameContainer;
