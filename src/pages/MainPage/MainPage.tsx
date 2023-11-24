import { Link } from "react-router-dom";
import { RoutePath } from "../../types";

import s from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={s.root}>
      <h1>Main</h1>
      <ul>
        <li>
          <Link to={RoutePath.ConfigPage}>Настройки</Link>
        </li>
        <li>
          <Link to={RoutePath.RulesPage}>Правила</Link>
        </li>
        <li>
          <Link to={RoutePath.PlayPage}>Начать</Link>
        </li>
      </ul>
    </div>
  );
}
