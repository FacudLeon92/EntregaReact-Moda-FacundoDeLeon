import styled from 'styled-components';
import { mobile, pc } from '../responsive';

const Container = styled.div`
  height: 2rem;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  ${pc({ maxWidth: '100vw' })}
  ${mobile({ marginTop: '6rem' })}
`;

const Title = styled.h1`
  color: white;
  font-size: 1rem;
`;
const Announcement = () => {
  return (
    <Container role="banner">
      <Title
        role="Complementario"
        title="¡Envío gratis en pedidos superiores a $50!"
        aria-label="¡Envío gratis en pedidos superiores a $50!"
      >
        ¡Envío gratis en pedidos superiores a $50!
      </Title>
    </Container>
  );
};

export default Announcement;
