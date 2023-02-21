import "./App.css";
import Counter from "./hooks/Counter";
import Users from "./hooks/Users";
import Tool from "./hoc/Tool";
import "./App.css";

function App() {
  return (
    <div>
      <Tool />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
