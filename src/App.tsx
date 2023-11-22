import { useState } from "react";
import "./App.css";
import OnLoadingComponent from "./components/OnLoadingComponent";
import LayoutComponent from "./components/LayoutComponent";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  const [appLoading, setAppLoading] = useState(true);

  const Loader = OnLoadingComponent(LayoutComponent);

  setTimeout(() => {
    setAppLoading(false);
  }, 5000);

  return (
    <Provider store={store}>
      <Loader isAppLoading={appLoading}></Loader>
    </Provider>
  );
}

export default App;
