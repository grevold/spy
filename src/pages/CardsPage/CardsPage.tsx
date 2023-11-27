import { useEffect, useState } from "react";
import { getRandomArrayOfSpies } from "../../utils/getRandomArrayOfSpies";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EScreen, gameActions } from "../../store/gameConfigSlice";

import s from "./CardsPage.module.css";

interface IState {
  arrayOfSpies: boolean[];
  playerIndex: number;
  isCardOpened: boolean;
}

const initialState: IState = {
  arrayOfSpies: [],
  playerIndex: 0,
  isCardOpened: false,
};

export function CardsPage() {
  const [state, setState] = useState<IState>(initialState);
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store.gameReducer);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      arrayOfSpies: getRandomArrayOfSpies(store.playersNumber),
    }));
  }, [store.playersNumber, setState]);

  const handleClick = () => {
    if (state.playerIndex === store.playersNumber - 1 && state.isCardOpened) {
      dispatch(gameActions.changeScreen(EScreen.Timer));
      return;
    }
    setState((prevState) => {
      if (prevState.isCardOpened) {
        return {
          ...prevState,
          playerIndex: prevState.playerIndex + 1,
          isCardOpened: false,
        };
      }
      return {
        ...prevState,
        isCardOpened: true,
      };
    });
  };
  if (!state.isCardOpened) {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.cardBack} onClick={handleClick}></div>
        </div>
      </div>
    );
  }
  if (state.arrayOfSpies[state.playerIndex]) {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.cardSpy} onClick={handleClick}>
            Вы шпион
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.cardRole} onClick={handleClick}>
          <div className={s.role}>
            <h1 className={s.role_header}>{store.game.title}</h1>
            <span className={s.role_header}>
              {" "}
              {store.game.roles[state.playerIndex % store.game.roles.length]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
