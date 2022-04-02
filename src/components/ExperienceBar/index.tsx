import { useChallenges } from "../../hooks/useChallenges";

import { Container } from "./styles";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Container>
      <span className="header__initial-xp">0 xp</span>
      <div className="header__progress-bar">
        <div className="header__fill-bar" style={{ width: `${percentToNextLevel}%`}}></div>

        <span className="header__current-xp" style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span className="header__goal-xp">{experienceToNextLevel} xp</span>
    </Container>
  )
}