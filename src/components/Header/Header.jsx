import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.ul`
  display: flex;
`;

const Category = styled.li`
  cursor: pointer;
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
