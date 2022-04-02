import { useChallenges } from "../../hooks/useChallenges";

import { Container } from "./styles";

export function ChallengesCompleted() {
  const {totalChallengesCompleted} = useChallenges()

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{totalChallengesCompleted}</span>
    </Container>
  )
}