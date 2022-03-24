import { Container } from "./styles";

export function ExperienceBar() {
  return (
    <Container>
      <span className="header__initial-xp">0 xp</span>
      <div className="header__progress-bar">
        <div className="header__fill-bar" style={{ width: "50%"}}></div>

        <span className="header__current-xp" style={{ left: "50%" }}>
          300 xp
        </span>
      </div>
      <span className="header__goal-xp">600 xp</span>
    </Container>
  )
}