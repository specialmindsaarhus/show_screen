import fs from "fs";
import path from "path";

export function getGames() {
  const gamesDir = path.join(process.cwd(), "public/games");
  try {
    return fs
      .readdirSync(gamesDir)
      .filter((name) => fs.existsSync(path.join(gamesDir, name, "index.html")));
  } catch (error) {
    console.error("Error reading games directory:", error);
    return [];
  }
}
