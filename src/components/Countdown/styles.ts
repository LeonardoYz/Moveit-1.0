import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3125rem 1fr;
  margin-bottom: 2rem;

  span {
    font: 600 var(--counter-font-size) "Rajdhani", sans-serif;
    color: var(--title-clr);
    user-select: none;
  }

  .counter {
    &__minutes,
    &__seconds {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.125rem;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
    }

    &__number {
      display: flex;
      justify-content: center;
      background-color: var(--neutral-clr);
      width: 100%;
      height: 9rem;
      border-radius: 5px;
    }

    &__bullets {
      justify-self: center;
      font-size: var(--counter-font-size-alt);
    }
  }
`;

export const InitialBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 1.75rem 0 1.6875rem;
  border: none;
  border-radius: 5px;
  font-size: var(--big-font-size);
  font-weight: 600;
  transition: background-color 280ms ease-in-out, color 280ms ease-in;

  &.initial-button {
    background-color: var(--blue-clr);
    color: var(--neutral-clr);

    &:hover {
      background-color: var(--dark-blue-clr);
    }
  }
`;

export const AbandonBtn = styled(InitialBtn)`
  background-color: var(--neutral-clr);
  color: var(--text-clr);
  gap: 16px;

  &:hover {
    background-color: var(--red-clr);

    color: var(--neutral-clr);

    .end-button-icon {
      color: var(--neutral-clr);
    }
  }

  .end-button-icon {
    transform: translateY(0.5px);
    color: var(--text-clr);
    transition: color 280ms ease-in;
  }
`;

export const EndBtn = styled(InitialBtn)`
  background-color: var(--neutral-clr);
  color: var(--text-clr);
  border-bottom: 4px solid var(--green-clr);
  gap: 16px;
  cursor: not-allowed;
`
