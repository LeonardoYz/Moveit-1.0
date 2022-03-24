import Image from "next/image"

import { Content } from "./styles";

export function Challenges() {
  return (
    <Content>
      <h2 className="challenge__title">Inicie um ciclo para receber desafios</h2>

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
    </Content>
  );
}
