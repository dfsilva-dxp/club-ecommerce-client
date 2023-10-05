import styled from "styled-components";

const Content = styled.section`
  width: 100vw;
  max-width: 1200px;
  height: calc(100vh - 83px);
  margin: 0 auto;
  padding: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  grid-template-areas:
    "women women men"
    "women women kids"
    "hat shoes jackets";
`;

export default Content;
