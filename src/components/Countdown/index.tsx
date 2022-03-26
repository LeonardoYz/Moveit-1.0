import Image from "next/image"
import { useEffect, useState } from "react";
import { IconContext } from "@react-icons/all-files";

import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";
import { CgClose } from "@react-icons/all-files/cg/CgClose";

import { Container, AbandonBtn, InitialBtn, EndBtn } from "./styles";

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [firstCharacterOfMinute, secondCharacterOfMinute] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [firstCharacterOfSeconds, secondCharacterOfSeconds] = String(seconds)
    .padStart(2, "0")
    .split("");

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

  function resetCountdown() {
    setIsActive(false)
    clearTimeout(countdownTimeout)
    setTime(25 * 60)
  }
  
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
        <EndBtn
          type="button"
        >
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
            <AbandonBtn 
              type="button"
              onClick={resetCountdown}
            >
              Abandonar ciclo
    
              <IconContext.Provider value={{ size: "22", className: "end-button-icon" }}>
                <CgClose />
              </IconContext.Provider>
            </AbandonBtn>
          ) : (
            <InitialBtn
              type="button"
              onClick={() => setIsActive(true)}
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
