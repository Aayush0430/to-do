import "./App.css";
import Task from "./Task";
import { IoIosAdd, IoLogoFacebook } from "react-icons/io";
import { useState } from "react";

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
    console.log(taskList);
    console.log(id);
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  //
  return (
    <div className="bg-white h-screen w-screen text-white flex justify-center pt-[10vh] dark:bg-gray-950">
      <div className="w-[50vw] min-h-[20vh] border-2 border-white  rounded-xl p-5">
        <div className="flex items-center justify-between bg-red pb-5">
          <h2 className="text-center text-xl font-bold font-mono">To do:</h2>
          <div className="flex items-center">
            <form onSubmit={addTask}>
              <input
                id="inputText"
                type="text"
                required
                placeholder="Enter taskname"
                className="w-[25vw] text-white border-2 border-white rounded-lg px-5 py-1"
                value={Eachtask}
                onChange={(e) => setEachTask(e.target.value)}
              />
              <button
                type="submit"
                className="text-2xl ml-2 border-0  rounded border-white  hover:scale-125 hover:rotate-90 transition-all ease-in-out "
              >
                <IoIosAdd />
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div>
          {taskList.map((taskEach, index) => (
            <Task
              key={taskEach.id}
              task={taskEach}
              // editFunction={() => editTask(index)}
              deleteFunction={() => deleteTask(taskEach.id)}
              setTaskList={setTaskList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
