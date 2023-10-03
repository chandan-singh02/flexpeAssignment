import React from "react";
import { TiDelete } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { removeCompletedTask } from "../features/todoTasks";
import { removeAllTasks } from "../features/todoTasks";

const CompletedTasks = () => {
  const dispatch = useDispatch();

  const completedTasks = useSelector((state) => state.task.completedTasks);

  const hasCompletedTasks = useSelector(
    (state) => state.task.hasCompletedTasks
  );
  const handleRemoveAllTasks = () => {
    dispatch(removeAllTasks());
  };
  return (
    <>
      <div class="w-1/2 p-4 border rounded-lg">
        <h2 class="text-lg font-semibold mb-2 border-b-2">Completed Tasks</h2>
        <table class="table-auto">
          <tbody>
            {completedTasks.map((taskdone, index) => (
              <tr key={taskdone.id}>
                <td class="px-2 py-1">{taskdone.text}</td>
                <td>
                  <button
                    onClick={() => dispatch(removeCompletedTask(taskdone))}
                    className="text-red-500 text-2xl"
                  >
                    <TiDelete className=" transition-transform transform hover:scale-125 duration-300 ease-in-out"></TiDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {hasCompletedTasks && (
          <button
            onClick={handleRemoveAllTasks}
            className="text-red-500 mt-1 transition-transform transform hover:scale-125 duration-300 ease-in-out"
          >
            <span className="text-sm">Remove All </span>
          </button>
        )}
      </div>
    </>
  );
};

export default CompletedTasks;
