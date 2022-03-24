import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  padding-top: 2.5rem;

  span {
    font-size: var(--smaller-font-size);
  }

  .header {
    &__progress-bar {
      position: relative;
      flex: 1;
      height: 0.25rem;
      border-radius: 0.25rem;
      background-color: var(--gray-line-clr);
      margin: 0 1.5rem; 
    }

    &__fill-bar {
      background-color: var(--green-clr);
      height: 100%;
      border-radius: inherit;
    }

    &__current-xp {
      position: absolute;
      top: 0.75rem;
      transform: translateX(-50%);
      font-weight: 500;
    }
  }
`