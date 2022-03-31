import Image from "next/image";
import { useContext } from "react";
import { IconContext } from "@react-icons/all-files";
import { CountdownContext } from "../../context/CountdownContext";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

import { Container, AbandonBtn, InitialBtn, EndBtn } from "./styles";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    handleStartCountdown,
  } = useContext(CountdownContext);

  const [firstCharacterOfMinute, secondCharacterOfMinute] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [firstCharacterOfSeconds, secondCharacterOfSeconds] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <>
      <Container>
        <div className="counter__minutes">
          <span className="counter__number">{firstCharacterOfMinute}</span>
          <span className="counter__number">{secondCharacterOfMinute}</span>
        </div>

        <span className="counter__bullets">:</span>

        <div className="counter__seconds">
          <span className="counter__number">{firstCharacterOfSeconds}</span>
          <span className="counter__number">{secondCharacterOfSeconds}</span>
        </div>
      </Container>
      {hasFinished ? (
        <EndBtn type="button">
          Ciclo encerrado
          <Image
            src="/assets/icons/check-circle.svg"
            alt="Check circle"
            width={20}
            height={20}
          />
        </EndBtn>
      ) : (
        <>
          {isActive ? (
            <AbandonBtn type="button" onClick={resetCountdown}>
              Abandonar ciclo
              <IconContext.Provider
                value={{ size: "22", className: "end-button-icon" }}
              >
                <CgClose />
              </IconContext.Provider>
            </AbandonBtn>
          ) : (
            <InitialBtn
              type="button"
              onClick={handleStartCountdown}
              className="initial-button"
            >
              Iniciar um ciclo
              <BsFillPlayFill size={24} color="#FFFFFF" />
            </InitialBtn>
          )}
        </>
      )}
    </>
  );
}
