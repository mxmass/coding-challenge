import React from "react";
import styled from "styled-components";

const Spot = styled.div`
  width: 2em;
  height: 2em;
  margin: 0.4em;
  background-color: ${props => props.hex};
  border-radius: 50%;
  position: relative;
  display: inline;
  &:focus {
    border: 0;
    & > span {
      border: 0;
    }
  }
  & > span {
    position: absolute;
    color: #fff;
    background: #000;
    text-align: center;
    visibility: hidden;
    padding: 0.5em;
    white-space: nowrap;
    border: 0;
    border-radius: 6px;
    &:after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -8px;
      width: 0;
      height: 0;
      border-bottom: 8px solid #000000;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
  }
  &:hover {
    & > span {
      visibility: visible;
      opacity: 0.8;
      transform: translateX(-50%);
      top: 2.5em;
      left: 50%;
      z-index: 99999;
    }
  }
`;

const ProductColor = React.memo(({ colour_name, hex_value }) => {
  return (
    <Spot hex={hex_value}>
      <span>{colour_name}</span>
    </Spot>
  );
});

export default ProductColor;
