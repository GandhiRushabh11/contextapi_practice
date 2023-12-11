import "./App.css";
import Counter from "./components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
function App() {
  const counterState = useContext(CounterContext);
  return (
    <div className="App">
      <h2>Context API</h2>
      <h3>Count is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
