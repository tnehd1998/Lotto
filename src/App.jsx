import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BuyLotto from "./components/BuyLotto/BuyLotto";
import Header from "./components/Header/Header";
import MyLotto from "./components/MyLotto/MyLotto";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <BuyLotto
          onChangeMoney={onChangeMoney}
          onClickInsertMoney={onClickInsertMoney}
        />
      ) : currentCategory === "check" ? (
        <MyLotto
          lottoCount={lottoCount}
          onClickShowNumber={onClickShowNumber}
          showNumber={showNumber}
          onClickReset={onClickReset}
          lottoNumber={lottoNumber}
        />
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
