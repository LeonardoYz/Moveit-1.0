import { BsFillPlayFill } from "@react-icons/all-files/bs/BsFillPlayFill";

import { Button, Container } from "./styles";

export function Countdown() {
  return (
    <>
      <Container>
        <div className="counter__minutes">
          <span className="counter__number">2</span>
          <span className="counter__number">5</span>
        </div>

        <span className="counter__bullets">:</span>

        <div className="counter__seconds">
          <span className="counter__number">0</span>
          <span className="counter__number">0</span>
        </div>
      </Container>

      <Button type="button">
        Iniciar um ciclo
        <BsFillPlayFill size={24} color="#fff"/>
      </Button>
    </>
  );
}
