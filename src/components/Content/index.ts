import styled from "styled-components";

const Content = styled.section`
  width: 100vw;
  height: calc(100vh - 83px);
  padding: 2.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "hat shoes"
    "jacket jacket"
    "female male";
`;

export default Content;
