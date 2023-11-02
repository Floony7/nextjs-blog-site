import styled from 'styled-components';

// 66% main and 33% sidebar, repsonsive
export const MainGrid = styled.section`
  width: 90vw;
  margin: 2rem auto;
  display: grid;
  gap: 0.5rem;
    @media (min-width: 960px) {
    grid-template-columns: 2fr 1fr;
    width: 75vw;
    }
`;

export const OneCol = styled.section`
  width: 90vw;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
    @media (min-width: 960px) {
    width: 75vw;
    }
`;