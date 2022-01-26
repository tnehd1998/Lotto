import React from "react";

const BuyLotto = ({ value, onChangeMoney, onClickInsertMoney }) => {
  return (
    <div>
      <h1>로또 자동 추첨 자판기</h1>
      <h2>금액을 투입하세요 (1000원에 한장)</h2>
      <input value={value} onChange={onChangeMoney} type="text" />
      <button onClick={onClickInsertMoney}>구매하기</button>
    </div>
  );
};

export default BuyLotto;
