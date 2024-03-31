// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "./component/Box";

function App() {
  const count = useSelector((state) => state.count); // 함수를 매개변수로 받는다.
  // 안에있는 함수는 state를 매개변수로 받는다.
  // state를 매개변수로 줌(store에 있는 모든 state 전달)
  // 그런데 이값이 전체가 필요한게 아니다.
  // 그중에서 멀가져온다. ? 객체안에 있는 count의 값만 가져온다.
  // 그 값이 반환이되면은 그값을 count에 속 넣는다.

  // 가져오고 싶은거 가져오기
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  // const dispatch = useDispatch
  // 버튼 클릭하면 카운팅되는 1,2,3,4,5 그것을 만들어본다.

  // Defalt
  // let counter = 0;

  // const [counter, setCounter] = useState(0);
  // const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  // dispatch 어떻게 쓸거냐? 액션을 던져줄거야, 언제던져 주느냐
  // 우리가 increase라는 버트을 눌렀을 때

  // 액션 어떻게 생김? - 그냥 단순한 오브젝트이다.
  // 오브젝트인데 형태가 있다 - 룰이 있다
  // 액션안에는 반드시 type, payload라는 키가 있다.
  // payload는 선택사항이다. - 옵션너란 정보이다. - 나중에 얘기하자구

  // type은 말그대로 액션의 이름이다.
  // 어떤 액션을 하고싶은지 액션의 이름을 넘겨주면 된다.
  // 증가하기 , 아이템 이름 다가져오기 등 이런식으로 액션의 이름을 던져줘야 Reducer 게를 가지고 한다구 햇져 ??
  // 우리 액션의 이름은 증가
  // useDispatch를 가지고 액션을 던져준거임
  // Reducer는 자동으로 dispatch가 던진 액션을 받아올 수 있음

  // payload
  // 의 경우 optional한 선택적인것/ 선택사항
  // 함수의 매개변수 같은 느낌 >> 그냥 내가 필요정보를 보내줄 수있는(내가 원하는 정보를 보내줄 수 있음)
  // !!! 결론 별거없다. 그냥 매개변수처럼 내가 필요한 값들을 전달해주는 역할

  // 과제 Decrement 감소 !!

  const increase = () => {
    // counter = counter + 1;
    // setCounter(counter + 1);
    // dispatch({ type: "INCREMENT" });

    // 한번에 증가시키는것을 5씩 하고 싶다 가정
    // payload 말 그대로 필요한값만 보내는것
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  // 만약에 내가 로그인이 하고 싶어, 그러면 유저 id와 password를 보내야 저장하잖아
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };

  // const decrement = () => {
  //   dispatch({ type: "DECREMENT" });
  // };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: -5 } });
  };

  return (
    <div>
      {/* <div>{counter}</div> */}
      {/* <div>state: {counter}</div> */}

      {/* 그냥 보여주기 */}
      <h1>
        {id}, {password}
      </h1>
      <h1>state: {count}</h1>
      <button onClick={increase}>클릭증가</button>
      <button onClick={decrement}>클릭감소</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
