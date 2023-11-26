import { useRedirectToStartScreenAfterTimeout } from "../../useRedirectToStartScreenAfterTimeout";

export function ModalWindowError() {
  useRedirectToStartScreenAfterTimeout();

  return <div>Вы пойманы за руку как шпион</div>;
}
