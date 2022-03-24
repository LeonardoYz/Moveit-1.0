import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesCompleted } from "../components/ChallengesCompleted";
import { Countdown } from "../components/Countdown";
import { Challenges } from "../components/Challenges";

import { Container } from "../styles/Container";
import { Content } from "../styles/Home";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Moveit - Início</title>
      </Head>

      <ExperienceBar />

      <Content>
        <div className="home__wrapper">
          <div className="home__status">
            <Profile />
            <ChallengesCompleted />
            <Countdown />
          </div>
          <div className="home__challenge">
            <Challenges />
          </div>
        </div>
      </Content>
    </Container>
  )
}
