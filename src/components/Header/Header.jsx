import React from "react";

const Header = (onClick) => {
  return (
    <ul>
      <li onClick={() => onClick("buy")}>로또 구매하기</li>
      <li onClick={() => onClick("check")}>구매한 로또 확인</li>
      <li onClick={() => onClick("wait")}>당첨금액 / 발표일</li>
    </ul>
  );
};

export default Header;
