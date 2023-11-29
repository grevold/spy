import { useRedirectToStartScreenAfterTimeout } from "../../useRedirectToStartScreenAfterTimeout";

import s from "./ModalWindowSuccess.module.css";

export function ModalWindowSuccess() {
  useRedirectToStartScreenAfterTimeout();
  return (
    <div className={s.root}>
      <img
        className={s.image}
        src={`${process.env.PUBLIC_URL}/images/right_answer.png`}
      />
      <h1 className={s.message}>Вы их переиграли</h1>
    </div>
  );
}
