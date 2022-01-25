import React from "react";
import styled from "styled-components";

const LottoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LottoNumber = styled.p`
  width: 2em;
  height: 2em;
  padding: 1em;
  border: 1px solid black;
  margin: 1em;
  text-align: center;
  line-height: 2em;
  border-radius: 50%;
`;

const Lotto = ({ lotto, index, showNumber }) => {
  return (
    <LottoWrapper>
      <h1>{index + 1}번</h1>
      {lotto.map((number, index) => (
        <LottoNumber key={index}>{showNumber ? number : ""}</LottoNumber>
      ))}
    </LottoWrapper>
  );
};

export default Lotto;
