import Head from "next/head";
import { GetServerSideProps } from "next"

import { useState } from "react";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesCompleted } from "../components/ChallengesCompleted";
import { Countdown } from "../components/Countdown";
import { Challenges } from "../components/Challenges";
import { ChallengesProvider } from "../hooks/useChallenges";
import { CountdownProvider } from "../hooks/useCountdown";
import { LevelUpModal } from "../components/LevelUpModal";
import { HomeProps } from "../types";

import { Container } from "../styles/Container";
import { Content } from "../styles/Home";

export default function Home(props: HomeProps) {
  const [isLevelUpModalOpen, setLevelUpModalOpen] = useState(false)

  function handleOpenLevelUpModal() {
    setLevelUpModalOpen(true)
  }

  function handleCloseLevelUpModal() {
    setLevelUpModalOpen(false)
  }

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      totalChallengesCompleted={props.totalChallengesCompleted}
      onOpenLevelUpModal={handleOpenLevelUpModal}
    >
      <Container>
        <Head>
          <title>Moveit - Início</title>
        </Head>

        <ExperienceBar />
        
        <main>
          <CountdownProvider>
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

              <LevelUpModal 
                isOpen={isLevelUpModalOpen}
                onRequestClose={handleCloseLevelUpModal}
              />
            </Content>
          </CountdownProvider>
        </main>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, totalChallengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      totalChallengesCompleted: Number(totalChallengesCompleted),
    }
  }
}