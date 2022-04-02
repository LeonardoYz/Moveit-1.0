import Image from "next/image"

import { useChallenges } from "../../hooks/useChallenges";

import { Container } from "./styles";

export function Profile() {
  const { level } = useChallenges();

  return (
    <Container>
      <div className="profile__image">
        <Image
          src="/assets/images/profile.jpg" 
          alt="Leonardo Yzquierdo" 
          quality={100}
          layout="fill"
        />
      </div>

      <div className="profile__text">
        <strong className="profile__username">Leonardo Yzquierdo</strong>

        <div className="profile__level">
          <Image 
            src="/assets/icons/level.svg" 
            alt="Level" 
            aria-hidden="true"
            width={14}
            height={16}
          />
          <span>Level {level}</span> 
        </div>
      </div>
    </Container>
  )
}