import React, { useState } from "react";
import CompletedTasks from "./CompletedTasks";
import NewTasks from "./NewTasks";
import { useDispatch } from "react-redux";
import { todoAddTask } from "../features/todoTasks";
const BoardView = ({ boardData, boardNumber }) => {
  const [taskss, setTask] = useState("");
  const [description, setdescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const getTaskData = (e) => {
    const addtask = e.target.value;
    setTask(addtask);
  };

  const getDescriptionData = (e) => {
    const adddescription = e.target.value;
    setdescription(adddescription);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (taskss.trim() === "") {
      setError("Please enter text before submitting.");
    } else {
      setError("");
      dispatch(todoAddTask({ text: taskss, description: description }));
      setTask(" ");
      setdescription(" ");
    }
  };

  return (
    <>
      <div class="flex justify-center space-x-4 ">
        <NewTasks></NewTasks>
        {boardData && (
          <form
            class="w-1/2 p-4 border rounded-lg text-center "
            onSubmit={onSubmitHandler}
          >
            <div>
              {boardNumber !== null && (
                <h1 className="font-semibold">Board {boardNumber} View</h1>
              )}

              <input
                type="text"
                // name="task"
                placeholder="Enter the task..."
                class="w-full p-2 rounded-md border border-gray-300 focus:border-violet-500 focus:outline-none mb-3"
                onChange={getTaskData}
                value={taskss}
              />
              <textarea
                class="w-full p-2 rounded-md border border-gray-300 focus:border-violet-500 focus:outline-none"
                id="w3review"
                type="description"
                rows="4"
                cols="50"
                onChange={getDescriptionData}
                placeholder="Detail description of Task"
                value={description}
              ></textarea>
            </div>
            {error && <p className="error text-red-700 font-normal">{error}</p>}
            <button
              type="submit"
              class="btn btn-primary bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Add
            </button>
          </form>
        )}
        <CompletedTasks></CompletedTasks>
      </div>
    </>
  );
};

export default BoardView;
