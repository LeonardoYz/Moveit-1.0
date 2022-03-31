import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import challenges from "../../challenges.json";
import { HomeProps } from "../types";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  totalChallengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
}

interface ChallengesProviderProps extends HomeProps {
  children: ReactNode;
  onOpenLevelUpModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [totalChallengesCompleted, setTotalChallengesCompleted] = useState(
    rest.totalChallengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", JSON.stringify(level));
    Cookies.set("currentExperience", JSON.stringify(currentExperience));
    Cookies.set(
      "totalChallengesCompleted",
      JSON.stringify(totalChallengesCompleted)
    );
  }, [level, currentExperience, totalChallengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    rest.onOpenLevelUpModal()
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const currentChallenge = challenges[randomChallengeIndex];

    setActiveChallenge(currentChallenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉", {
        body: `Valendo ${currentChallenge.amount} xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience += -experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setTotalChallengesCompleted(totalChallengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experienceToNextLevel,
        levelUp,
        currentExperience,
        totalChallengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
