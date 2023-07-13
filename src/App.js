import "./styles.css";
import { createContext, useContext, useReducer, useRef } from "react";

const NameContext = createContext("default");

function Comp1() {
  const name = useContext(NameContext);
  return (
    <>
      <div>I'n Inner one {name}</div>
      <Comp2 />
    </>
  );
}

function Comp2() {
  const name = useContext(NameContext);
  return <div>More inner {name}</div>;
}

export default function App() {
  const ref = useRef("");

  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add": {
        ref.current.style.color = "blue";
        return state + 1;
      }
      case "sub": {
        ref.current.style.color = "red";
        return state - 1;
      }
      default: {
        return state;
      }
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <NameContext.Provider value={"Shivam"}>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Comp1 />
        </div>
      </NameContext.Provider>
      <br></br>
      <br></br>
      <div className="counter-ui">
        <button onClick={() => dispatch("sub")}>-</button>
        <h1 ref={ref}>{count}</h1>
        <button onClick={() => dispatch("add")}>+</button>
      </div>
    </>
  );
}
