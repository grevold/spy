import { ChangeEventHandler, useState } from "react";
import { useAppSelector } from "../../store/store";
import { ModalWindowSuccess } from "./components/ModalWindowSuccess/ModalWindowSuccess";
import { ModalWindowError } from "./components/ModalWindowError/ModalWindowError";

import s from "./SpyTestPage.module.css";

enum EModalWindow {
  Success = "Success",
  Error = "Error",
}

interface IState {
  answer?: string;
  modalWindow?: EModalWindow;
}

export function SpyTestPage() {
  const [state, setState] = useState<IState>({});
  const { title, answerOptionsForSpyTest } = useAppSelector(
    (store) => store.gameReducer.game
  );

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const answer = event.target.value;
    setState({ answer });
  };

  const handleSubmit = () => {
    const { answer } = state;
    if (!answer) return;
    setState((prevState) => ({
      ...prevState,
      modalWindow:
        prevState.answer === title ? EModalWindow.Success : EModalWindow.Error,
    }));
  };

  if (state.modalWindow === EModalWindow.Success) {
    return <ModalWindowSuccess />;
  }
  if (state.modalWindow === EModalWindow.Error) {
    return <ModalWindowError />;
  }

  return (
    <div className={s.root}>
      <h1>Тест на шпиона</h1>
      <select onChange={handleSelect} className={s.answers_select}>
        {answerOptionsForSpyTest.map((answer, index) =>
          index === 0 ? (
            <option key={answer} disabled selected>
              {answer}
            </option>
          ) : (
            <option key={answer} value={answer}>
              {answer}
            </option>
          )
        )}
      </select>
      <button
        disabled={!state.answer}
        onClick={handleSubmit}
        className={s.button_answer}
      >
        Применить
      </button>
    </div>
  );
}
