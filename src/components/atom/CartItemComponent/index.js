// name
// plus and minus button
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;

const CartItemWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 5px;
`;

export const CartItemComponent = ({ item, count, dispatch }) => {
  const increment = () =>
    dispatch({ type: "increment", payload: { id: item.id } });

  const decrement = () =>
    dispatch({ type: "decrement", payload: { id: item.id } });

  return (
    <CartItemWrapper>
      <span>
        {item.name.trim()}: {count}
      </span>
      <Icon icon={faPlus} onClick={increment} />
      <Icon icon={faMinus} onClick={decrement} />
    </CartItemWrapper>
  );
};

export default CartItemComponent;
