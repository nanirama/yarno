import styled from "styled-components";
import { sm } from "../../utils/breakpoints";

export const Container = styled.div`
  text-align: center;
  max-width: ${props => props.maxWidth || "120rem"};
  margin: 0 auto;
  margin-bottom: 2rem;

  @media ${sm} {
    display: flex;
    justify-content: space-between;

    > div {
      flex: 1;
      padding: 0 3rem;
    }
  }
`;
