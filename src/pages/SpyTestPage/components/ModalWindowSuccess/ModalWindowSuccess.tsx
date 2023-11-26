import { useRedirectToStartScreenAfterTimeout } from "../../useRedirectToStartScreenAfterTimeout";

export function ModalWindowSuccess() {
  useRedirectToStartScreenAfterTimeout();
  return <div> Ну вы точно не шпион</div>;
}
