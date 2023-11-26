import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { EScreen, gameActions } from "../../store/gameConfigSlice";

export function TimerPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = window.setTimeout(() => {
      dispatch(gameActions.changeScreen(EScreen.SpyTest));
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [dispatch]);
  return <div>Tic Tac</div>;
}
