// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from './reducers';
import { createStore } from "redux";
import reducer from "./reducer/reducer";

// createStore에 매개변수가 하나 있다 >>> counterReducer
// let store = createStore(counterReducer)
// store라는 얘가 있는데, 이얘를 바꿀 수 있는 것은 Reducer라는 함수이다
// let store = createStore(counter)

// 이 store안에 Reducer를 또 추가를 해줘야 한다.

let store = createStore(reducer); // 이게 선생님이 해주신거

// 이 reducer가 store를 바꿔주는 함수가 되겠다.

export default store;

// export const store = configureStore({
//   reducer: {
//     counter: reducer, // 'counter'는 상태의 일부분 : 카운터 앱을 컨트롤
//   },
// });
