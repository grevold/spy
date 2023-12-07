import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EScreen, gameActions } from "../../store/gameConfigSlice";

import s from "./TimerPage.module.css";

export function TimerPage() {
  const storeTime = useAppSelector((store) => store.gameReducer.time);
  const [state, setState] = useState({
    minutes: storeTime / 60000,
    seconds: 0,
  });
  const dispatch = useAppDispatch();
  const timer = useRef<number>();
  // const callTimer = useRef<number>();
  const call = new Audio(`${process.env.PUBLIC_URL}/call.mp3`);

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      dispatch(gameActions.changeScreen(EScreen.SpyTest));
    }, storeTime);
    const callTimer = window.setTimeout(() => {
      call.play();
    }, storeTime - 10000);

    const timerId = window.setInterval(
      () =>
        setState(function (prevState) {
          if (prevState.minutes === 0 && prevState.seconds === 0) {
            window.clearInterval(timerId);
            return {
              minutes: 0,
              seconds: 0,
            };
          }
          if (prevState.seconds === 0) {
            return {
              minutes: prevState.minutes - 1,
              seconds: 59,
            };
          } else {
            return {
              minutes: prevState.minutes,
              seconds: prevState.seconds - 1,
            };
          }
        }),
      1000
    );
    return () => {
      window.clearTimeout(timer.current);
      window.clearTimeout(timerId);
      window.clearTimeout(callTimer);
    };
  }, [dispatch]);

  const goToTest = () => {
    window.clearTimeout(timer.current);
    dispatch(gameActions.changeScreen(EScreen.SpyTest));
  };
  return (
    <div className={s.root}>
      <div className={s.dial}>
        <div className={s.minutes}>
          {state.minutes < 10 ? "0" + state.minutes : state.minutes}
        </div>
        <h1>:</h1>
        <div className={s.seconds}>
          {state.seconds < 10 ? "0" + state.seconds : state.seconds}
        </div>
      </div>
      <button onClick={goToTest} className={s.goToTestButton}>
        Перейти к тесту
      </button>
    </div>
  );
}
