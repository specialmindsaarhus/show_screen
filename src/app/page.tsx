import Link from "next/link";
import GameContainer from "./components/GameContainer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#0c0811] to-[#0e0f18] text-white">
      <GameContainer />
    </main>
  );
}
