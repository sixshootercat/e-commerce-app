import styled from 'styled-components';
import { ReactComponent as Shopping } from 'assets/shopping-cart.svg';

export const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingIcon = styled(Shopping)`
  width: 24px;
  height: 24px;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
