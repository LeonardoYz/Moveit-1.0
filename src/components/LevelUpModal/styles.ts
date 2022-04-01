import { createGlobalStyle } from "styled-components";
import { lighten } from "polished"

export const LevelUpModalStyles = createGlobalStyle`
  .modal {
    &__overlay {
      display: flex;
      justify-content: center;
      align-items: center;

      position: fixed;
      inset: 0;
      opacity: 0;
      background-color: hsl(220, 13%, 95%, 0.8);
      transform: translateY(-20px);
      transition: opacity 300ms ease-out, transform 300ms ease-in;
    }

    &__content {
      position: relative;
      padding: 3rem 3.125rem 2.5rem 3.125rem;
      background-color: var(--neutral-clr);
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__close {
      &--button {
        position: absolute;
        top: 1.3125rem;
        right: 1.25rem;
        border: none;
        background-color: transparent;
        font-size: 0px;
      }

      &--icon {
        color: var(--text-clr);
      }
    }

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;

      background: url("/assets/icons/leaves.svg") no-repeat;
      height: 5.8369rem;
      width: 9.5625rem;
      margin-bottom: 1.5rem;
    }

    &__level {
      font-size: 8.75rem;
      color: var(--blue-clr);
      text-shadow: 0px 10px 16px rgba(89, 101, 224, 0.3);
    }

    &__text {
      margin-bottom: 2rem;
    }

    &__title {
      font-size: var(--h2-font-size);
      color: var(--title-clr);
      line-height: 40px;
    }

    &__paragraph {
      font-size: var(--big-font-size);
      line-height: 30px;
    }

    &__button {
      display: flex;
      align-items: center;
      gap: 1rem;

      padding: 0.9375rem 2.5rem;
      border-radius: 5px;
      border: none;
      background-color: var(--light-blue-clr);
      color: var(--neutral-clr);

      transition: background-color 280ms ease-out;

      &:hover {
        background-color: ${lighten(0.09, "hsl(198, 75%, 52%)")};
      }
    }
  }

  .ReactModal__Overlay--after-open {
    transform: translateY(0);
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    transform: translateY(-20px);
    opacity: 0;
  }
`
