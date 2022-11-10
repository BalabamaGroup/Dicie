import ContentCards from "./ContentCards";

import * as Styled from "./index.styled";

export interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Styled.HomePage>
      <Styled.HomeContent>
        <ContentCards />
      </Styled.HomeContent>
    </Styled.HomePage>
  );
};

export default Home;
