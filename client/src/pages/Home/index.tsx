import { useParams } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import useHomeStore from '@/stores/HomeStore';

import ContentCards from './ContentCards';
import * as Styled from './index.styled';

const Home = () => {
  let { card: selectedCard } = useParams();

  return (
    <Styled.HomePageDefaultBackground>
      <Styled.HomePage selectedCard={selectedCard}>
        <NavBar page='home' />
        <Styled.HomeContent>
          <ContentCards />
        </Styled.HomeContent>
      </Styled.HomePage>
    </Styled.HomePageDefaultBackground>
  );
};

export default Home;
