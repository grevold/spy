import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { gameReducer } from "./gameConfigSlice";

export const store = configureStore({
  reducer: {
    gameReducer,
  },
});

type ReduxState = ReturnType<typeof store.getState>;
type ReduxDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppDispatch = () => useDispatch<ReduxDispatch>();
