import styled from "styled-components";

export const EmptyChallengeBox = styled.div`
  display: grid;
  row-gap: 4rem;
  background-color: var(--neutral-clr);
  padding: 6.875rem 6.75rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);

  .challenge {
    &__title {
      font-size: var(--bigger-font-size);
      font-weight: 500;
      line-height: 34px;
    }

    &__image {
      margin-bottom: 1rem;
    }

    &__paragraph {
      line-height: 26px;
    }
  }
`;

export const ActiveChallengeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--neutral-clr);
  padding: 1.5625rem 3.5rem 2rem 3.5rem;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 31.5rem;

  .challenge {
    &__header {
      padding-bottom: 1.5625rem;
      border-bottom: 2px solid var(--gray-line-clr);
      margin-bottom: 0.5rem;

      span {
        font-size: var(--big-font-size);
        font-weight: 600;
        color: var(--blue-clr);
        line-height: 30px;
      }
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10.9375rem;
    }

    &__text {
      margin: -0.5rem 0 2.375rem
    }

    &__title {
      font-size: var(--h2-font-size);
      color: var(--title-clr);
      margin-bottom: 0.5rem;
    }

    &__paragraph {
      line-height: 26px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
interface ButtonProps {
  btnState: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10.875rem;
  height: 3.125rem;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  color: var(--neutral-clr);
  transition: filter 280ms ease-in-out;

  background-color: ${(props) =>
    props.btnState === "failed" ? "var(--red-clr)" : "var(--green-clr)"};

  &:hover {
    filter: brightness(0.92);
  }
`;
