import fs from "fs";
import path from "path";
import { NextPage } from "next";

interface Params {
  game: string; // Type for dynamic route parameter
}

const GamePage: NextPage<{ params: Params }> = ({ params }) => {
  const { game } = params; // Access dynamic route parameter 'game'

  // Path to the HTML file in the public/games directory
  const gamePath = path.join(
    process.cwd(),
    "public",
    "games",
    game,
    "index.html",
  );

  // Read the HTML content if the file exists
  let htmlContent = "";
  if (fs.existsSync(gamePath)) {
    htmlContent = fs.readFileSync(gamePath, "utf-8");
  } else {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        style={{ width: "100%" }} // Adjust height as needed
      />
    </div>
  );
};

export default GamePage;
