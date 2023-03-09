import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { addNumber, subtractNumber } from "./states/actions/counterActions";

function App() {
  const counter = useSelector((e) => e.counter);
  const loginDetails = useSelector((e) => e.loginDetails);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Navbar />
      <h2>{loginDetails ? "You are Logged in" : "You are logged out"}</h2>
      <h3>Count {counter}</h3>
      <button
        onClick={() => {
          dispatch(addNumber(100));
        }}
        type="button"
        className="btn btn-primary m-2"
      >
        Add 100
      </button>
      <button
        onClick={() => {
          dispatch(subtractNumber(100));
        }}
        type="button"
        className="btn btn-primary"
      >
        Subtract 100
      </button>
    </div>
  );
}

export default App;
