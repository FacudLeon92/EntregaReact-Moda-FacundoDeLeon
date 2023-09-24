import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../../responsive';

const ProductAmountContainer = styled.aside`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const ProductAmount = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0px 5px;
  ${mobile({ margin: '0.3125rem  0.9375rem' })}
`;

const Icon = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.hover};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  color: ${({ theme }) => theme.bg};
  &:hover {
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.text};
  }
  &:focus {
    background-color: ${({ theme }) => theme.bg};
    border: 1px solid ${({ theme }) => theme.hover};
    color: ${({ theme }) => theme.text};
  }
`;

const QuantityButton = ({ add, remove, quantity }) => {
  return (
    <ProductAmountContainer role="complementary">
      <Icon
        title="agregar"
        aria-label="agregarás +1 a tu carrito"
        role="cifra"
        onClick={add}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            add;
          }
        }}
        tabIndex="0"
      >
        <Add aria-label="Agregar" />
      </Icon>
      <ProductAmount
        role="contentinfo"
        value={quantity}
        title={quantity}
        aria-label={`tu carrito tendra  ${quantity} de este producto`}
      >
        {quantity}
      </ProductAmount>
      <Icon
        title="quitar"
        aria-label="eliminarás +1 a tu carrito
        "
        role="cifra"
        onClick={remove}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            remove;
          }
        }}
      >
        <Remove aria-label="Quitar" />
      </Icon>
    </ProductAmountContainer>
  );
};

export default QuantityButton;
