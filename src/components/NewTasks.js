import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { completedTask } from "../features/todoTasks";
import ViewModal from "./ViewModal";
import { Link } from "react-router-dom";
import { removeNewTasks } from "../features/todoTasks";

const NewTasks = () => {
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const tasks = useSelector((state) => {
    return state.task.tasks;
  });

  const count = useSelector((state) => {
    return state.task.count;
  });

  return (
    <>
      <div className="w-1/2 p-4 border rounded-lg ">
        {showPopup && (
          <ViewModal
            id={id}
            // showPopup={showPopup}
            setShowPopup={setShowPopup}
          ></ViewModal>
        )}
        <h2 className="text-lg font-semibold mb-2 border-b-2">
          New Tasks <span className="ml-3">{count}</span>
        </h2>

        <table className="table-auto">
          <tbody>
            {count > 0 &&
              tasks.map((task, index) => (
                <tr key={task.id} className="border-b-2">
                  <td className="px-2 py-1 ">
                    <span className="mr-2 font-semibold ">
                      Task {index + 1}:
                    </span>
                    {task.text}
                  </td>
                  <td className="px-2 py-1">
                    <input
                      type="checkbox"
                      className="text-2xl"
                      onClick={() => dispatch(completedTask(task))}
                    />
                  </td>
                  <td className="px-2 py-1">
                    <Link
                      to={`/update/${task.id}`}
                      className="text-2xl text-lime-600  card-link  no-underline"
                    >
                      <AiFillEdit className="no-underline transition-transform transform hover:scale-125 duration-300 ease-in-out"></AiFillEdit>
                    </Link>
                  </td>
                  <td className="px-2 py-1">
                    <button
                      onClick={() => [setId(task.id), setShowPopup(true)]}
                      className="text-blue-500 text-2xl"
                    >
                      <GrFormView className="transition-transform transform hover:scale-125 duration-300 ease-in-out"></GrFormView>
                    </button>
                  </td>

                  <td className="px-2 py-1">
                    <button
                      onClick={() => dispatch(removeNewTasks(task))}
                      className="text-red-500 text-2xl"
                    >
                      <TiDelete className="transition-transform transform hover:scale-125 duration-300 ease-in-out"></TiDelete>
                    </button>
                  </td>
                </tr>
              ))}
            {count === 0 && <p>No Tasks Available</p>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewTasks;
