// import { check } from "prettier";
// import React from "react";
import React, { useState } from "react";

export const Todo = ({ todo, check, setChecked }) => {
  // const delButton = (e) => {
  //   console.log(e.target);
  //   todo.filter((el) => {
  //     return el === e.target.value;
  //   });
  // };
  // const checkcheck = () => {
  //   const textpap = document.getElementById("textdad");
  //   if (check.value !== "") {
  //   }
  // };
  // function checkcheck() {
  //   const [check, setChecked] = useState("");
  // }

  return (
    <div>
      {todo.map((el, index) => {
        return (
          <div id="daddy">
            <div id="lists">
              <div id="checkdad">
                <input
                  id="check"
                  type="checkbox"
                  check={check}
                  setChecked={setChecked}
                />
              </div>
              <div id="textdad">
                <p> Id : {el.id + 1} </p>
                <div key={index} id="text">
                  <div textDecorationLine={check ? "line-through" : "none"}>
                    {" "}
                    {el.text}{" "}
                  </div>
                </div>
              </div>
              <div id="delete">
                <button
                  // value=""
                  // onClick={(e) => delButton(e)}
                  id="deletebutt"
                >
                  me
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// const Lists = (props) => {
//   return (
//     <div id="daddy">
//       <div id="lists">
//         <div id="checkdad">
//           <input type="checkbox" />
//         </div>
//         <div id="textdad">
//           <div id="text">lol</div>
//         </div>                              textDecoration: "line-through"
//         <div id="delete">
//           <button id="deletebutt">me</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lists;
