import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "./components/Router/Router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
