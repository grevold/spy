import { useRedirectToStartScreenAfterTimeout } from "../../useRedirectToStartScreenAfterTimeout";

import s from "./ModalWindowError.module.css";

export function ModalWindowError() {
  useRedirectToStartScreenAfterTimeout();

  return (
    <div className={s.root}>
      <img
        className={s.image}
        src={`${process.env.PUBLIC_URL}/images/catch_spy.png`}
      />
      <h1 className={s.message}>Шпион пойман за руку!</h1>
    </div>
  );
}
