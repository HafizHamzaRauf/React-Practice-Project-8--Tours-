import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Provider>
  );
}
export default App;
