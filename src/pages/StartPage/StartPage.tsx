import { ChangeEventHandler } from "react";
import { gameActions } from "../../store/gameConfigSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export function StartPage() {
  const dispatch = useAppDispatch();
  const playersNumber = useAppSelector(
    (store) => store.gameReducer.playersNumber
  );
  const clickStart = () => dispatch(gameActions.startGame());
  const handlePlayersNumberChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const newPlayersNumber = parseInt(event.target.value);
    dispatch(gameActions.changePlayersNumber(newPlayersNumber));
  };
  return (
    <div>
      <div>
        <select onChange={handlePlayersNumberChange} value={`${playersNumber}`}>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <button onClick={clickStart}>Начать</button>
    </div>
  );
}
