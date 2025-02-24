import "./App.css";
import Task from "./Task";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import Oneline from "./Oneline";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [Eachtask, setEachTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10000),
      taskName: Eachtask,
      isCompleted: false,
    };
    setTaskList((prev) => [...prev, task]);
    setEachTask("");
  }

  function deleteTask(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen w-full flex justify-center pt-20 bg-gray-950 px-4 sm:px-0">
      <div className="w-full sm:w-2/3 md:w-1/2 min-h-[70vh] bg-amber-100 shadow-2xl shadow-gray h-max border-2 border-white rounded-xl p-5">
        <div className="sm:flex items-center justify-between pb-5">
          <h2 className="text-center mt-2 text-4xl rosegoldia sm:text-5xl ml-3">
            To do:
          </h2>
          <form
            onSubmit={addTask}
            className="flex items-center w-full sm:w-auto"
          >
            <input
              id="inputText"
              type="text"
              required
              placeholder="Enter task"
              className="edu-font flex-grow sm:w-[20vw] sm:text-lg tracking-wide border-0  shadow-[gray] shadow-sm border-amber-200 bg-amber-50 rounded-lg px-5 py-1 focus:outline-none"
              value={Eachtask}
              onChange={(e) => setEachTask(e.target.value)}
            />
            <button
              type="submit"
              className="text-3xl ml-2 border-0 rounded hover:scale-110 transition-all ease-in-out"
            >
              <MdOutlinePlaylistAdd />
            </button>
          </form>
        </div>
        <Oneline />
        <div>
          {taskList.map((taskEach) => (
            <>
              <Task
                key={taskEach.id}
                task={taskEach}
                deleteFunction={() => deleteTask(taskEach.id)}
              />
              <Oneline />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
