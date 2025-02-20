import React, { useState, useRef, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";

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
    <div className="rounded-lg py-3 px-5 my-2 border-2 border-white flex items-center justify-between hover:bg-gray-900">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return setEditClicked(false);
        }}
      >
        <input
          id={task.id}
          readOnly={isEditCLicked ? false : true}
          type="text"
          className={`taskNameEach overflow-hidden border-0 rounded px-2 outline-none ${
            ischecked ? "line-through" : ""
          } ${
            isEditCLicked
              ? "bg-gray-600  border-2"
              : "bg-transparent text-white"
          }`}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          type="submit"
          className={`text-green-400 hover:scale-125 ease-in-out ml-2 ${
            isEditCLicked ? "inline" : "hidden"
          }`}
        >
          <FaCheck />
        </button>
      </form>

      <span className="flex items-center">
        <input
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
          className="taskListEach scale-150 accent-gray-400 "
        />
        <button
          // onClick={() => setEditClicked((prev) => !prev)}
          onClick={handleEditClick}
          className=" ml-5 text-xl hover:text-blue-500 hover:scale-125 transition-all ease-in-out"
        >
          <CiEdit />
        </button>
        <button
          onClick={deleteFunction}
          className=" ml-5 text-xl hover:scale-125 hover:text-red-500 transition-all ease-in-ocd t"
        >
          <MdDeleteForever />
        </button>
      </span>
    </div>
  );
};

export default Task;
//tick huda katne
