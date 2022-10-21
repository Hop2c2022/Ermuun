import "./App.css";
import "./component/component.css";
import React, { useState } from "react";
import { Input } from "./component/input";
import { Button } from "./component/button";
import { Todo } from "./component/todo";
import Header from "./component/header";
import Todohead from "./component/todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header />
      <Todohead />
      <div id="input">
        <Input setInput={setInput} input={input} />
        <Button
          input={input}
          todo={todo}
          setTodo={setTodo}
          setInput={setInput}
        />
      </div>
      <Todo todo={todo} />
    </div>
  );
};

export default App;

// import "./App.css";
// import "./component/component.css";
// import React, { useState } from "react";
// import Header from "./component/header";
// import { Button } from "./component/button";
// import Todo from "./component/todolist";
// import Newtask from "./component/newtask";
// import Lists from "./component/lists";

// const App = () => {
//   const [newTask, setNewTask] = useState("");
//   return (
//     <div className="App">
//       <Header />
//       <Todo />
//       <div id="input">
//         <Newtask setNewTask={setNewTask} />
//         <Button />
//       </div>
//       <Lists />
//     </div>
//   );
// };

// export default App;
