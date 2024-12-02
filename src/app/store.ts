import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  settingsSlice as settings,
  userSlice as user,
  loginSlice as login,
} from "@shared/@common/model/slices";

export const store = configureStore({
  reducer: {
    settings,
    user,
    login,
  },

  // serializableCheck 옵션을 false로 설정하여
  // 직렬화 불가능한 데이터(예: 함수, class 인스턴스 등)의 상태 저장 검사를 비활성화
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// RootState 타입 정의: store의 상태 트리 전체의 타입을 반환
// 컴포넌트에서 useSelector 훅 등을 사용할 때 유용
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch 타입 정의: Redux의 dispatch 함수 타입을 반환
// 컴포넌트에서 useDispatch 훅 등을 사용할 때 유용
export type AppDispatch = typeof store.dispatch;
// useDispatch에 AppDispatch 타입을 적용한 커스텀 훅 생성
// 컴포넌트에서 이 커스텀 훅을 사용해 타입 안정성이 보장된 dispatch 사용 가능
// 사용시 const dispatch = useAppDispatch()로 사용
export const useAppDispatch = () => useDispatch<AppDispatch>();
