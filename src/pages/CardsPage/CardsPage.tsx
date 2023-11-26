import { useEffect, useState } from "react";
import { getRandomArrayOfSpies } from "../../utils/getRandomArrayOfSpies";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EScreen, gameActions } from "../../store/gameConfigSlice";

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
    return <div onClick={handleClick}>Обратная сторона карточки</div>;
  }
  if (state.arrayOfSpies[state.playerIndex]) {
    return <div onClick={handleClick}>Вы шпион</div>;
  }
  return (
    <div onClick={handleClick}>
      {store.game.roles[state.playerIndex % store.game.roles.length]}
    </div>
  );
}
