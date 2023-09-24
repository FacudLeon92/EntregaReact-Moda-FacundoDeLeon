import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.section`
  height: 60vh;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 4.375rem;
  margin-bottom: 1.25rem;
  ${mobile({ fontSize: '2.5rem' })}
`;

const Desc = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1.25rem;
  ${mobile({ textAlign: 'center', fontSize: '1.3rem' })}
`;

const InputContainer = styled.div`
  max-width: 1200px;
  width: 50%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '90%' })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  border-bottom: 1px solid lightgrey;
  outline: none;
  padding-left: 1.25rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Nuevo = () => {
  return (
    <Container role="form" aria-label="Nuevo section">
      <Title>Enviar informacion</Title>
      <Desc
        role="complementary"
        aria-label="Obtener informacion u ofertas de tus productos favoritos."
      >
        Obtener informacion u ofertas de tus productos favoritos.
      </Desc>
      <InputContainer role="contentinfo">
        <Input
          placeholder="email"
          type="email"
          role="form"
          title="email"
          aria-label="correo electrónico para suscribirse al contenedor"
        />

        <Button
          role="button"
          title="Suscribete"
          aria-label="Suscribete"
        >
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Nuevo;
