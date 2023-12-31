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
  const storeTime = useAppSelector((store) => store.gameReducer.time);
  const clickStart = () => dispatch(gameActions.startGame());
  const handlePlayersNumberChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const newPlayersNumber = parseInt(event.target.value);
    dispatch(gameActions.changePlayersNumber(newPlayersNumber));
  };
  const handleTimeChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newTime = parseInt(event.target.value);
    dispatch(gameActions.changeTime(newTime));
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
      <div className={s.time}>
        <span className={s.timeHeader}>Время игры</span>
        <select
          className={s.selectTime}
          onChange={handleTimeChange}
          value={`${storeTime}`}
        >
          <option value="120000">2 мин</option>
          <option value="180000">3 мин</option>
          <option value="240000">4 мин</option>
        </select>
      </div>
      <button className={s.buttonStart} onClick={clickStart}>
        Начать
      </button>
    </div>
  );
}
