import "./App.css";
import Task from "./Task";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useState } from "react";
import Line from "./line";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [Eachtask, setEachTask] = useState("");

  //add task
  function addTask(e) {
    e.preventDefault();
    // console.log(Eachtask);
    const task = {
      id: Math.floor(Math.random() * 10000),
      taskName: Eachtask,
      isCompleted: false,
    };
    setTaskList((prev) => [...prev, task]);
    setEachTask("");
    // setTaskList()
  }
  //delete functon
  function deleteTask(id) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  //
  return (
    <div className=" min-h-[100vh] w-[100vw]  flex justify-center pt-[10vh] bg-gray-950 ">
      <div className="w-[50vw] min-h-[70vh] bg-amber-100 shadow-2xl shadow-[gray] h-max border-2 border-white  rounded-xl p-5">
        <div className="flex items-center justify-between bg-red pb-5">
          <h2 className="text-center mt-2 text-5xl rosegoldia ml-5">To do:</h2>

          <form onSubmit={addTask} className="flex items-center ">
            <input
              id="inputText"
              type="text"
              required
              placeholder="Enter taskname"
              className="w-[25vw] text-lg tracking-wide border-0 shadow-[gray] shadow-sm border-amber-200 bg-amber-50 edu-font rounded-lg px-5 py-1 focus:outline-none"
              value={Eachtask}
              onChange={(e) => setEachTask(e.target.value)}
            />
            <button
              type="submit"
              className="text-2xl ml-2 border-0  rounded border-white  hover:scale-125  transition-all ease-in-out "
            >
              <MdOutlinePlaylistAdd />
            </button>
          </form>
        </div>
        {/* <hr /> */}
        <Line />
        <div>
          {taskList.map((taskEach, index) => (
            <>
              <Task
                key={taskEach.id}
                task={taskEach}
                // editFunction={() => editTask(index)}
                deleteFunction={() => deleteTask(taskEach.id)}
                setTaskList={setTaskList}
              />
              <Line />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
