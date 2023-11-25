import { RoutePath } from "./types";
import { MainPage } from "./pages/MainPage/MainPage";
import { ConfigPage } from "./pages/ConfigPage/ConfigPage";
import { Route, Routes, HashRouter } from "react-router-dom";
import { RulesPage } from "./pages/RulesPage/RulesPage";
import { PlayPage } from "./pages/PlayPage/PlayPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainPage />} path={RoutePath.MainPage} />
        <Route element={<ConfigPage />} path={RoutePath.ConfigPage} />
        <Route element={<RulesPage />} path={RoutePath.RulesPage} />
        <Route element={<PlayPage />} path={RoutePath.PlayPage} />
      </Routes>
    </HashRouter>
  );
}

export default App;
