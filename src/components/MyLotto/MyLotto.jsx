import React from "react";
import styled from "styled-components";

const Lotto = styled.div`
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

const MyLotto = ({
  lottoCount,
  onClickShowNumber,
  showNumber,
  onClickReset,
  lottoNumber,
}) => {
  return (
    <div>
      <h1>구매한 로또 갯수 : {lottoCount}</h1>
      <button onClick={onClickShowNumber}>
        {showNumber ? "번호 가리기" : "번호 확인하기"}
      </button>
      <button onClick={onClickReset}>초기화</button>
      {lottoNumber.length > 0 &&
        lottoNumber.map((lotto, index) => (
          <Lotto key={index}>
            <h1>{index + 1}번</h1>
            {lotto.map((number, index) => (
              <LottoNumber key={index}>{showNumber ? number : ""}</LottoNumber>
            ))}
          </Lotto>
        ))}
    </div>
  );
};

export default MyLotto;
