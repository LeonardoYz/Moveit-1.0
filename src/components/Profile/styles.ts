import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;
  margin-bottom: 3.5rem;

  .profile {
    &__text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &__image {
      position: relative;
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 100vw;
      overflow: hidden;
    }

    &__username {
      font-size: var(--bigger-font-size);
      color: var(--title-clr);
    }

    &__level {
      display: flex;
      align-items: center;
      gap: 0.5625rem;
    }
  }
`