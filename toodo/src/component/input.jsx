import React from "react";

export const Input = ({ setInput, input }) => {
  const inputChangerListener = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input id="newtask" value={input} onChange={inputChangerListener} />
    </div>
  );
};

// import React from "react";
// import App from "../App";

// export const newTask = ({ setNewTask, Newtask }) => {
//   const newTaskChangerListener = (event) => {
//     setNewTask(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         onChange={newTaskChangerListener}
//         placeholder="New Task"
//         id="newtask"
//       />
//     </div>
//   );
// };
// export default newTask;

// const Newtaskval = () => {
//     return newtask.value
// }

// let inputValue = "";
// const addTask = () => {
//     const [task,setTask] = useState('dandar');
//     console.log(task);
//     setTask('suga')
//     console.log(task);
//     inputValue = document.getElementById('newtask').value;

//     const list = document.getElementById('text')
//     const el = document.createElement('div')
//     el.innerHTML = inputValue;

//     list.appendChild(el)
// }

// <div id="list">
//                 <div id="daddy">
//                     <div id="lists">
//                         <div id="checkdad">
//                             <input type="checkbox" />
//                         </div>
//                         <div id="textdad">
//                             <div id="text">

//                             </div>
//                         </div>
//                         <div id="delete">
//                             <button id="deletebutt">
//                                 me
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
