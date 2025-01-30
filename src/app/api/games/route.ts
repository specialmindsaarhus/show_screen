import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const gamesDir = path.join(process.cwd(), "public/games");

  try {
    const games = fs
      .readdirSync(gamesDir)
      .filter((name) => fs.existsSync(path.join(gamesDir, name, "index.html")));
    return new Response(JSON.stringify(games), { status: 200 });
  } catch (error) {
    console.error("Error reading games directory:", error);
    return new Response(JSON.stringify({ error: "Failed to load games" }), {
      status: 500,
    });
  }
}
