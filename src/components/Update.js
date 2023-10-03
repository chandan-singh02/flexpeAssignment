import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
// import { todoAddTask } from "../features/todoTasks";
import { useNavigate, useParams } from "react-router-dom";
import { updateTasks } from "../features/todoTasks";
const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateData, setUpdateData] = useState();
  const { tasks } = useSelector((state) => state.task);

  const taskId = parseInt(id);

  useEffect(() => {
    console.log(id);
    if (id) {
      const singleUser = tasks.filter((ele) => ele.id === taskId);
      console.log("single update" + singleUser);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({
      id: taskId,
      text: e.target.value,
      description: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTasks(updateData));
    navigate("/");
  };

  return (
    <>
      <div class="flex justify-center space-x-4 mt-10">
        <form
          class="w-1/2 p-4 border rounded-lg text-center "
          onSubmit={handleUpdate}
        >
          <div>
            <input
              type="text"
              // name="task"
              placeholder="Enter the task..."
              class="w-full p-2 rounded-md border border-gray-300 focus:border-violet-500 focus:outline-none mb-3"
              value={updateData && updateData.text}
              onChange={newData}
            />
            <textarea
              class="w-full p-2 rounded-md border border-gray-300 focus:border-violet-500 focus:outline-none"
              id="w3review"
              type="description"
              rows="4"
              cols="50"
              //   value={updateData && updateData.description}
              //   onChange={newData}
              placeholder="Detail description of Task"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
