import Image from "next/image";
import { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import { CountdownContext } from "../../context/CountdownContext";

import {
  ActiveChallengeBox,
  BtnBox,
  Button,
  EmptyChallengeBox,
} from "./styles";

export function Challenges() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className="challenge">
      {activeChallenge ? (
        <ActiveChallengeBox>
          <header className="challenge__header">
            <span>Ganhe {activeChallenge.amount} xp</span>
          </header>

          <div className="challenge__content">
            <div className="challenge__image">
              <Image
                src={`/assets/icons/${
                  activeChallenge.type === "body" ? "exercise.svg" : "eye.svg"
                }`}
                alt="Challenge"
                height={activeChallenge.type === "body" ? 175 : 78}
                width={activeChallenge.type === "body" ? 140 : 152}
              />
            </div>

            <div className="challenge__text">
              <h2 className="challenge__title">
                {activeChallenge.type === "body"
                  ? "Exercite-se"
                  : "Mova os olhos"}
              </h2>
              <p className="challenge__paragraph">
                {activeChallenge.description}
              </p>
            </div>

            <BtnBox>
              <Button
                type="button"
                btnState="failed"
                onClick={handleChallengeFailed}
              >
                Falhei
              </Button>

              <Button
                type="button"
                btnState="completed"
                onClick={handleChallengeSucceeded}
              >
                Completei
              </Button>
            </BtnBox>
          </div>
        </ActiveChallengeBox>
      ) : (
        <EmptyChallengeBox>
          <h2 className="challenge__title">
            Finalize um ciclo para receber um desafio
          </h2>

          <div className="challenge__detail">
            <div className="challenge__image">
              <Image
                src="/assets/icons/level-plus.svg"
                alt="Level Plus"
                aria-hidden="true"
                width={58.56}
                height={80}
              />
            </div>

            <p className="challenge__paragraph">
              Avance de level completando os desafios.
            </p>
          </div>
        </EmptyChallengeBox>
      )}
    </div>
  );
}
