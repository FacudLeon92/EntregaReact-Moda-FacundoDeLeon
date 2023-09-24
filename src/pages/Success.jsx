import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
// ui
import Button from '../components/ui/Button';
//components
import { clearCart } from '../components/redux/cartRedux';
// functions
import { makeOrder } from '../utils/logic/orders';
import { handleSuccess } from '../utils/toast';
import Loading from '../components/ui/Loading';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  font-size: 1.3rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://i.ibb.co/5MHGtm3/woman-1245817-1280.jpg')
      center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = useSelector((state) => state.cart);
  const cartId = location.state.cartId;
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const [done, setDone] = useState(false);
  const msgSuccess = `El pedido se ha creado correctamente. tu numero de orden es ${orderId}`;
  const msgFail = `Algo salió mal, tu pedido aún no fue creado...`;

  useEffect(() => {
    const createOrder = async () => {
      const res = await makeOrder(
        data.billing_details.address,
        cartId,
        cart.total,
      );
      if (res) {
        setOrderId(res._id);
        dispatch(clearCart());
        setDone(true);
        handleSuccess('gracias');
      } else {
        setOrderId(null);
        setDone(true);
      }
    };

    // Se verifica si el ID del pedido es null antes de crear la orden
    if (orderId === null) {
      data && createOrder();
    }
  }, [cart, cartId, data, currentUser, orderId]);

  return (
    <Container
      title={orderId ? msgSuccess : msgFail}
      role="contentinfo"
      aria-label={orderId ? msgSuccess : msgFail}
    >
      {' '}
      {done ? (
        <>
          {orderId ? msgSuccess : msgFail}
          <Link to="/" role="link" style={{ textDecoration: 'none' }}>
            <Button text={'Sigue comprando'} />
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Success;
