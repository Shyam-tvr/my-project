import "./App.css";
import {BrowserRouter} from "react-router-dom"
import Routers from "./Routers/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
