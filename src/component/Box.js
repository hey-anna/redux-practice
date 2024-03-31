import React from "react";
import { useSelector } from "react-redux";
import { GrandSonBox } from "./GrandSonBox";

// update값 받고 싶으면 useSelector 사용하면 된다.
// 어디서든 state가 필요하면 가져다 쓸 수 있다.

// !! App에서 굳이 props로 넘길 필요가 없음
// useSelector로 그냥 가져다 사용하면 된다.

export const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <>
      <div>This is Box {count}</div>
      <GrandSonBox />
    </>
  );
};
