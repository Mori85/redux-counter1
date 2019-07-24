import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import { increment } from "./actions";
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  // const toDos = useSelector(state => state.todoApp);
  //const dispatch = useDispatch(() => toDos(""));
  const handleOnClick = () => {
    dispatch(() => increment(1));
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(1))}>+</button>
    </div>
  );
}

export default App;
