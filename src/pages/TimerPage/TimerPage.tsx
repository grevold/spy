import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { EScreen, gameActions } from "../../store/gameConfigSlice";

import s from "./TimerPage.module.css";

export function TimerPage() {
  const [state, setState] = useState({ minutes: 1, seconds: 59 });
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      dispatch(gameActions.changeScreen(EScreen.SpyTest));
    }, 1000);
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
      window.clearTimeout(timer);
    };
  }, [dispatch]);
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
    </div>
  );
}
