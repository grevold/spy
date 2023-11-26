import { CardsPage } from "../../pages/CardsPage/CardsPage";
import { SpyTestPage } from "../../pages/SpyTestPage/SpyTestPage";
import { StartPage } from "../../pages/StartPage/StartPage";
import { TimerPage } from "../../pages/TimerPage/TimerPage";
import { EScreen } from "../../store/gameConfigSlice";
import { useAppSelector } from "../../store/store";

export function Router() {
  const screen = useAppSelector((store) => store.gameReducer.screen);

  switch (screen) {
    case EScreen.Cards: {
      return <CardsPage />;
    }
    case EScreen.Timer: {
      return <TimerPage />;
    }
    case EScreen.SpyTest: {
      return <SpyTestPage />;
    }
    default: {
      return <StartPage />;
    }
  }
}
