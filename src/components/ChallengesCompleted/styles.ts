import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.9375rem;
  border-bottom: 2px solid var(--light-gray);
  margin-bottom: 3.5rem;

  span { 
    color: var(--text-clr);
    font-weight: 500;

    &:first-child {
      font-size: var(--small-font-size);
    }

    &:last-child {
      font-size: var(--bigger-font-size);
    }
  }
`