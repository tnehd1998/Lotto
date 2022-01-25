import React from "react";
import Lotto from "../Lotto/Lotto";

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
          <Lotto
            key={index}
            lotto={lotto}
            index={index}
            showNumber={showNumber}
          />
        ))}
    </div>
  );
};

export default MyLotto;
