import Image from "next/image"

import { Container } from "./styles";

export function Profile() {
  return (
    <Container>
      <div className="profile__image">
        <Image
          src="/assets/images/profile.jpg" 
          alt="Leonardo Yzquierdo" 
          width={88}
          height={88}
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
          <span>Level 1</span> 
        </div>
      </div>
    </Container>
  )
}