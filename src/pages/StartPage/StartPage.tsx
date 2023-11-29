import { ChangeEventHandler } from "react";
import { gameActions } from "../../store/gameConfigSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import s from "./StartPage.module.css";
import { Logo } from "../../icons/Logo";

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
    <div className={s.root}>
      <div className={s.header_block}>
        <Logo />
        <span className={s.sub_title}>
          Интеллектуальная психологическая игра для компании
        </span>
      </div>

      <img
        className={s.illustration}
        src={`${process.env.PUBLIC_URL}/images/main.png`}
      />
      <div className={s.numberPlayers}>
        <span className={s.numberPlayersHeader}>Количество игроков</span>
        <select
          className={s.selectNumberPlayers}
          onChange={handlePlayersNumberChange}
          value={`${playersNumber}`}
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <button className={s.buttonStart} onClick={clickStart}>
        Начать
      </button>
    </div>
  );
}
