import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
const ViewModal = ({ id, setShowPopup }) => {
  const allTasks = useSelector((state) => {
    return state.task.tasks;
  });
  const singleTask = allTasks.filter((task) => task.id == id);
  const dateString = singleTask[0].date;
  const datePart = dateString.split("T")[0];

  console.log(datePart);
  return (
    <>
      <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className=" h-96 w-96">
          <div class="bg-white  p-3 rounded-lg shadow-xl ">
            <button
              onClick={() => setShowPopup(false)}
              className=" p-1 font-normal flex justify-end items-center border-double border-4  transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <span className="mr-1 ">Close</span>
              <AiOutlineClose className="text-1xl"></AiOutlineClose>
            </button>
            <h2 class="text-2xl font-medium mb-3 text-center">Task Details</h2>
            <div class="mb-3 flex ">
              <p class="text-gray-600 mr-1">Task ID:</p>
              <p class="text-black font-medium">{singleTask[0].id}</p>
            </div>
            <div class="mb-4 flex  ">
              <p class="text-gray-600 mr-1">Task Name:</p>
              <p class="text-black font-medium">{singleTask[0].text}</p>
            </div>
            <div class="mb-4 flex ">
              <p class="text-gray-600 mr-1 ">Task Details:</p>
              <p class="text-black font-medium">{singleTask[0].description}</p>
            </div>

            <div class="mb-4  flex">
              <p class="text-gray-600 mr-1">Date Created:</p>
              <p class="text-black font-medium">{datePart}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModal;
