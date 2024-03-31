// 초기화 필수 !!
// count라는 것을 적용해보겠다.
// 이것을 아래 매개변수 초기값으로 넣어 줄 것이다.
let initialState = {
  count: 0,
  id: "",
  password: "",
};

// reducer는 두개의 매개변수를 가져간다.
// 이 액션은 아까 우리가 dispatch({ type: "INCREMENT" }); 로 던져준 이친구를 탁 받아올 수 있다.
function reducer(state = initialState, action) {
  console.log("action은 몰까?", action);
  // console.log("현재 액션:", action);
  // console.log("현재 상태:", state);

  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 }; // 오브젝트 객체를 반환
  // }
  switch (action.type) {
    case "INCREMENT":
      // return { ...state, count: state.count + 1 };
      return { ...state, count: state.count + action.payload.num };
    // case "DECREMENT":
    // return { ...state, count: state.count - 1 };
    case "DECREMENT":
      return { ...state, count: state.count + action.payload.num };
    // 행동지침 로그인 추가
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      }; // 무조건 닷닷닷 스테이트
    // 닷닷닷 스테이트를 통해, 모든걸 유지를 하고 (예를 들면 count)
    // 나는 id와 password를 변경해줄게요
    default:
      return { ...state }; // 이 return값을 디폴트로 가져간다
  }
}
// 결론은 Reducer가 store을 바꾸는 역할을 한다. 어떻게 바꾸는데?
// if문으로 행동지침? 알겠어, 그래서 어떻게 stroe을 바꾼다구?
// return값으로 바꾼다.
// store는 가만히 있다가 reducer가 어떤새로운것을 return해주자나? 게를 그냥 적용하는거야
// !! 그래서 reducer는 항상 return을 해줘야 한다. >> 항상 먼가를 돌려줘야한다 state한테
// count에 플러스 1을 한 값을 돌려줘야 한다.
// state에 있으니깐 state.count
// 플러스 1을 적용한 값을 다시 카운트라는 >> count: state.count + 1 키에 넣고
// 게를 리턴해준다.
// ...state를 해준 이유? : 다른 모르는 state가 있을수도 있기 때문에 한거임
// so, 기존 스테이트 값은 유지를 하되, 카운트만 바꾼다. count: state.count + 1
// 새로운 객체를 전달받아야 store가 본인이 바뀐걸 암
// 주소값이 계속 같은 객체만 받으면 바뀐걸 인식 못함
// store 약간 멍청해서, 안에 세부 디테일이 바뀐거를 모른다.
// !! 객체의 주소가 새로운 객체가 오느냐 안오느냐만 따지게 된다
// ...spread 문법을 통해 기존 객체내용을 복사해 새로운 객체에 전달 가능
// !! 헤이 나 새로운 값 받았는데 받아볼래?
// 헷갈리면 ...state는 그냥 기본적으로 치고 간다 생각하면 됨
// store는 무조건 리턴값을 받아야 한다.

//reducer가 행동지침을 가지고 있다
// 그거를 그냥 if else문으로 표현해두 되고
// switch문으로 표현해도 된다
// 회사 마다 다른데, 그회사에 맞는 문법에 따르면 된다.

export default reducer;

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     default:
//       console.log("action은 몰까?", action);
//       return state;
//   }
// }

// export default reducer;
