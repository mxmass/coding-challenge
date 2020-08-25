import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 35vh auto 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(128, 148, 153, 0.2);
  border-right: 1.1em solid rgba(128, 148, 153, 0.2);
  border-bottom: 1.1em solid rgba(128, 148, 153, 0.2);
  border-left: 1.1em solid #809499;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Spinner = () => {
  return (
    <Loading>
      <Circle />
    </Loading>
  );
};

export default Spinner;
