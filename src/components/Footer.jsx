import styled from 'styled-components';
import { mobile } from '../responsive';
import { contact, e, social } from '../utils/data/footerData';
import { Link } from 'react-router-dom';

const Container = styled.footer`
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  margin: auto;
  max-width: 1200px;
  ${mobile({ flexDirection: 'column', display: 'flex' })}
`;
const Left = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const Logo = styled.h3`
  font-size: 2rem;
`;

const Desc = styled.p`
  margin: 1.25rem 0px;
`;

const SocialContainer = styled.aside`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.25rem;
`;

const Center = styled.aside`
  flex: 1;
  padding: 1.25rem;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 1.875rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.2rem;
  position: relative;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.text};
    text-decoration-thickness: 1px;
  }
`;
const Right = styled.aside`
  flex: 1;
  padding: 1.25rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const MenuItem = styled.p`
  color: ${({ theme }) => theme.text};
`;
const A = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container role="contentinfo" aria-label="footer">
      <Wrapper role="complementary">
        <Left role="table">
          <Logo
            aria-label="Electronix logo"
            role="banner"
            title="Fashion Week Store"
          >
            Fashion Week Store
          </Logo>
          <Desc
            aria-label="sobre Fashion Week Store"
            role="complementary"
            title="sobre Fashion Week Store"
          >
            Somos Fashion Week Store, una tienda de ropa con una pasión por la moda y el estilo. Desde 1 de enero 2019, hemos estado comprometidos en proporcionar a nuestros clientes prendas de alta calidad y las últimas tendencias de moda. Nuestra misión es ayudarte a lucir y sentirte mejor con nuestra selección de ropa de alta calidad y accesorios de moda.
          </Desc>
          <SocialContainer role="list">
            {/* redes  */}
            {social.map((i) => {
              const { id, color, icon, link } = i;
              return (
                <A
                  href={link}
                  key={id}
                  target="_blank"
                  title={link}
                  role="link"
                  aria-label={link}
                >
                  <SocialIcon color={color} role="img">
                    {icon}
                  </SocialIcon>
                </A>
              );
            })}
          </SocialContainer>
        </Left>
        <Center role="table">
          {/* navegacion */}
          <Title role="complementary">Enlaces</Title>
          <List role="list">
            {e.map((i) => {
              const { id, route, name } = i;
              return (
                <ListItem key={id}>
                  <Link
                    to={route}
                    style={{ textDecoration: 'none' }}
                    title={name}
                    role="list"
                    aria-label={name}
                  >
                    <MenuItem>{name}</MenuItem>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Center>
        {/* contacto */}
        <Right role="tab">
          <Title role="complementary">Contacto</Title>
          <>
            {contact.map((i) => {
              const { id, url, icon, text } = i;
              return (
                <ContactItem key={id}>
                  <A
                    href={url}
                    style={{ textDecoration: 'none' }}
                    title={text}
                    role="link"
                    aria-label={text}
                  >
                    {icon}
                    {text}
                  </A>
                </ContactItem>
              );
            })}
          </>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
