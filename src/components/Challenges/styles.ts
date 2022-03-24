import styled from "styled-components";

export const Content = styled.div`
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
`