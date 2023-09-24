import logo from '../assests/logo.png';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useHistory,Link } from 'react-router-dom';

import { mobile } from '../responsive';
// ui
import Button from './ui/Button';
//functions
import { addToCart, payment } from '../utils/logic/cart';

const KEY = process.env.REACT_APP_STRIPE;

const SummaryContainer = styled.aside`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 1.25rem;
  height: 20rem;
  ${mobile({ height: '10rem', padding: '1rem', margin: '0 1rem' })}
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 1.875rem 0rem;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '1.5rem'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Summary = ({ cart, username }) => {
  const [userCart, setUserCart] = useState(null);
  const [stripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const handleClick = async () => {
    await addToCart(cart, setUserCart);
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      await payment(stripeToken.id, cart.total, history, userCart);
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, history, userCart]);

  return (
    <SummaryContainer role="table">
      <SummaryTitle role="contentinfo" aria-label="Su resumen del pedido">
      Resumen del pedido.
      </SummaryTitle>
      <SummaryItem>
        <SummaryItemText role="contentinfo">Subtotal</SummaryItemText>
        <SummaryItemPrice
          role="contentinfo"
          title={cart.total}
          aria-label={cart.total}
        >
          ${cart.total}
        </SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText role="complementary">
        Envío estimado
        </SummaryItemText>
        <SummaryItemPrice
          role="contentinfo"
          title="Envío estimado $35.90"
          aria-label={`Su factura es de $ ${cart.total}`}
        >
          $ 35.90
        </SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText role="complementary">
        Descuento de envío
        </SummaryItemText>
        <SummaryItemPrice
          role="contentinfo"
          title="Descuento de envío $35.90"
          aria-label={`Su factura es de $ ${cart.total}`}
        >
          $ -35.90
        </SummaryItemPrice>
      </SummaryItem>
      <SummaryItem type="total">
        <SummaryItemText role="complementary">Total</SummaryItemText>
        <SummaryItemPrice
          role="contentinfo"
          title={cart.total}
          aria-label={`Su factura es de $ ${cart.total}`}
        >
          $ {cart.total}
        </SummaryItemPrice>
      </SummaryItem>
      {username ? (
        <StripeCheckout
          name="Tienda"
          image={logo}
          billingAddress
          shippingAddress
          description={`El total es $${cart.total}`}
          amount={cart.total * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <Button
            text={'Ver Ahora'}
            onClick={handleClick}
            onKeyUp={handleClick}
          />
        </StripeCheckout>
      ) : (
        <Link
          to="/auth"
          role="link"
          aria-label="este es un enlace a la autenticación"
          style={{ textDecoration: 'none' }}
        >
          <Button text={'Ver Ahora'} />
        </Link>
      )}
    </SummaryContainer>
  );
};

export default Summary;
