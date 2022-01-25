import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
`;

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

const App = () => {
  const [money, setMoney] = useState("");
  const [lottoCount, setLottoCount] = useState(0);
  const [lottoNumber, setLottoNumber] = useState([]);
  const [showNumber, setShowNumber] = useState(false);
  const [timeUntilResult, setTimeUntilResult] = useState("");
  const [currentCategory, setCurrentCategory] = useState("buy");

  const onChangeMoney = (event) => {
    setMoney(event.target.value);
  };

  const onClickInsertMoney = () => {
    if (!Number(money)) {
      return alert("금액은 숫자만 가능합니다.");
    }
    if (money % 1000) {
      return alert("1000원 단위로 투입이 가능합니다.");
    }
    setLottoCount(lottoCount + Number(money) / 1000);
    addRandomLottos(Number(money) / 1000);
  };

  const getRandomLottoNumbers = () => {
    let result = [];
    for (let i = 0; i < 6; i++) {
      let current = Math.ceil(Math.random() * 50);
      while (result.includes(current)) {
        current = Math.ceil(Math.random() * 50);
      }
      result.push(current);
    }
    return result.sort((a, b) => a - b);
  };

  const addRandomLottos = (number) => {
    let total = [];
    for (let count = 0; count < number; count++) {
      const numbers = getRandomLottoNumbers();
      total.push(numbers);
    }
    setLottoNumber([...lottoNumber, ...total]);
  };

  const onClickReset = () => {
    setLottoCount(0);
    setLottoNumber([]);
  };

  const onClickShowNumber = () => {
    setShowNumber((showNumber) => !showNumber);
  };

  useEffect(() => {
    if (localStorage.getItem("lottos")) {
      const data = JSON.parse(localStorage.getItem("lottos"));
      setLottoNumber(data);
      setLottoCount(data.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lottos", JSON.stringify(lottoNumber));
  }, [lottoNumber]);

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeUntilResult(calculateTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const calculateTimeLeft = () => {
    let time = (Number(new Date("2022-01-29")) - Number(new Date())) / 1000;
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time - 86400 * days) / 3600);
    const minutes = Math.floor((time - 86400 * days - 3600 * hours) / 60);
    const seconds = Math.floor(time % 60);
    return `${days}일 ${hours - 9}시간 ${minutes}분 ${seconds}초`;
  };

  return (
    <AppWrapper>
      <Header setCurrentCategory={setCurrentCategory} />
      {currentCategory === "buy" ? (
        <div>
          <h1>로또 자동 추첨 자판기</h1>
          <h2>금액을 투입하세요 (1000원에 한장)</h2>
          <input onChange={onChangeMoney} type="text" />
          <button onClick={onClickInsertMoney}>구매하기</button>
        </div>
      ) : currentCategory === "check" ? (
        <div>
          <h1>구매한 로또 갯수 : {lottoCount}</h1>
          <button onClick={onClickShowNumber}>
            {showNumber ? "번호 가리기" : "번호 확인하기"}
          </button>
          {lottoNumber.length > 0 &&
            lottoNumber.map((lotto, index) => (
              <Lotto key={index}>
                <h1>{index + 1}번</h1>
                {lotto.map((number, index) => (
                  <LottoNumber key={index}>
                    {showNumber ? number : ""}
                  </LottoNumber>
                ))}
              </Lotto>
            ))}
          <button onClick={onClickReset}>초기화</button>
        </div>
      ) : (
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
      )}
    </AppWrapper>
  );
};

export default App;
