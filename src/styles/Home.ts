import styled from "styled-components";

export const Content = styled.section`
  padding: calc(8.3125rem + 0.75rem) 0;
  display: flex;

  .home {
    &__wrapper {
      display: flex;
      gap: 6.4375rem;
    }

    &__status {
      flex-basis: 24.3125rem;
    }

    &__challenge {
      flex: 1;
    }
  }
`