import React, { useState, useRef, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdSaveAs } from "react-icons/md";
import Line from "./line";

const Task = ({ key, task, deleteFunction, editFunction }) => {
  const [ischecked, setChecked] = useState(false);
  const [isEditCLicked, setEditClicked] = useState(false);
  const [taskName, setTaskName] = useState(task.taskName);

  const taskInputRef = useRef(null); // Create ref

  //edit
  function handleEditClick() {
    setEditClicked((prev) => !prev);
    setTimeout(() => {
      const inputField = document.getElementById(task.id);
      if (inputField) {
        inputField.focus();
        // inputField.select(); // Select all text for easy editing
      } else {
        console.log("not found");
      }
    }, 0); // Ensure this runs after state update
  }
  return (
    <div className="rounded-lg  edu-font text-3xl font-extralight py-3 px-5 my-1  flex items-center justify-between ">
      <div className="flex  ">
        <input
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
          className="taskListEach w-6 h-6 mr-4 mt-2"
        />
        <form
          className="flex justify-between items-center w-[37vw]"
          onSubmit={(e) => {
            e.preventDefault();
            return setEditClicked(false);
          }}
        >
          <input
            id={task.id}
            readOnly={isEditCLicked ? false : true}
            type="text"
            className={`taskNameEach overflow-hidden w-[33vw] border-0 rounded px-2 outline-none ${
              ischecked ? "line-through" : ""
            } ${isEditCLicked && ischecked ? "no-underline" : ""}`}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button
            type="submit"
            className={`text-green-400 scale-90 hover:scale-100 ease-in-out ml-2 ${
              isEditCLicked ? "inline" : "hidden"
            }`}
          >
            <MdSaveAs />
          </button>
        </form>
      </div>

      <span className="flex items-center">
        <button
          // onClick={() => setEditClicked((prev) => !prev)}
          onClick={handleEditClick}
          className={` ml-5 text-xl scale-125 hover:text-blue-500  hover:scale-150 transition-all ease-in-out ${
            isEditCLicked ? "text-blue-500 scale-125" : ""
          }`}
        >
          <CiEdit />
        </button>
        <button
          onClick={deleteFunction}
          className=" ml-5 text-xl scale-125 hover:scale-150 hover:text-red-500 transition-all ease-in-ocd t"
        >
          <MdDeleteForever />
        </button>
      </span>
    </div>
  );
};

export default Task;
//tick huda katne
