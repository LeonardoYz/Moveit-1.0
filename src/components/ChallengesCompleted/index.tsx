import { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";

import { Container } from "./styles";

export function ChallengesCompleted() {
  const {totalChallengesCompleted} = useContext(ChallengesContext)

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{totalChallengesCompleted}</span>
    </Container>
  )
}