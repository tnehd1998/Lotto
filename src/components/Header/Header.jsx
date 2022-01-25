import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.ul`
  display: flex;
  height: 5vh;
`;

const Category = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 0 1em;
  border: 1px solid black;
  padding: 1em;
  border-radius: 20px;
`;

const Header = ({ setCurrentCategory }) => {
  return (
    <HeaderWrapper>
      <Category onClick={() => setCurrentCategory("buy")}>
        로또 구매하기
      </Category>
      <Category onClick={() => setCurrentCategory("check")}>
        구매한 로또 확인
      </Category>
      <Category onClick={() => setCurrentCategory("wait")}>
        당첨금액 / 발표일
      </Category>
    </HeaderWrapper>
  );
};

export default Header;
