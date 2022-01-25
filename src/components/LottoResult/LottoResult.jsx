import React from "react";

const LottoResult = ({ timeUntilResult }) => {
  return (
    <div>
      <div>
        <h1>로또 당첨 금액</h1>
        <h1>1등 : 1,513,274,790원 </h1>
        <h1>2등 : 60,229,843원 </h1>
        <h1>3등 : 1,371,186원</h1>
        <h1>4등 : 50,000원</h1>
        <h1>5등 : 5,000원</h1>
      </div>
      <h1>발표일까지 남은 시간 : {timeUntilResult}</h1>
    </div>
  );
};

export default LottoResult;
