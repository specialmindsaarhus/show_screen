import fs from "fs/promises";
import path from "path";
import { FC } from "react";

interface GamePageProps {
  params: Promise<{ game: string }>;
}

const GamePage: FC<GamePageProps> = async ({ params }) => {
  // Sikrer at params er defineret
  const { game } = await params;

  const gamePath = path.join(
    process.cwd(),
    "public",
    "games",
    game,
    "index.html",
  );

  try {
    const htmlContent = await fs.readFile(gamePath, "utf-8");

    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ width: "100%" }}
        />
      </div>
    );
  } catch (error) {
    return <div>Game not found</div>;
  }
};

// Gør Next.js opmærksom på, hvilke routes der findes
export async function generateStaticParams() {
  const gamesDir = path.join(process.cwd(), "public", "games");
  try {
    const gameFolders = await fs.readdir(gamesDir);
    return gameFolders.map((game) => ({ game }));
  } catch {
    return [];
  }
}

export default GamePage;
