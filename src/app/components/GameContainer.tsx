"use client";

//import { getGames } from "~/lib/getGames";
import GameCard from "./GameCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import { type } from "os";

const GameContainer = () => {
  //const games = getGames();
  const games = ["GreenKnight", "Mario", "pasta", "thor"];
  console.log("games: ", games);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  //temp array for building / dev:

  let carouselActive = true;

  return (
    <div
      style={{
        transform: `translateX(-${currentIndex * 100}%)`, // Move slides to the left
        transition: "transform 1s ease-in-out", // Smooth transition
      }}
      className="flex w-full flex-row"
    >
      {games.map((game) => (
        <GameCard key={game} game={game} />
      ))}
    </div>
  );
};

export default GameContainer;
