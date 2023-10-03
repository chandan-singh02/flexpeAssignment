import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { BsPlusCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addBoard } from "../features/todoBoard";
import { removeBoard } from "../features/todoBoard";
import BoardView from "./BoardView";

const Board = () => {
  const [selectedBoard, setSelectedBoard] = useState(false);
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.app.boards);

  const handleAddBoard = () => {
    const newBoardName = `Board ${boards.length + 1}`;
    dispatch(addBoard(newBoardName));
  };

  const handleBoardClick = (index) => {
    setSelectedBoard(index);
  };

  return (
    <>
      <div class=" flex items-center justify-center  p-3 mb-10 mt-5">
        <table class="table-auto w-full ">
          <tbody>
            <tr class="text-center">
              <td class="px-4 py-2 flex  items-center justify-center">
                {boards.map((board, index) => (
                  <div className="flex">
                    <li
                      key={index}
                      className={`list-none p-2 rounded-full transition ease-out duration-700 hover:scale-90 transform  ${
                        selectedBoard === index ? "bg-purple-200 " : ""
                      }`}
                      onClick={() => handleBoardClick(index)}
                    >
                      {board.board}
                    </li>
                    <button
                      className="  text-1xl text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeBoard(board))}
                    >
                      <TiDelete></TiDelete>
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddBoard}
                  className="flex items-center font-semibold hover:text-gray-700 transition-colors duration-300 ease-in-out "
                >
                  <span className="mr-1 ml-4 ">Add new board</span>
                  <BsPlusCircleFill className="text-sm" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>;
      {selectedBoard !== null && (
        <BoardView
          boardData={boards[selectedBoard]}
          boardNumber={selectedBoard !== null ? selectedBoard + 1 : null}
        />
      )}
    </>
  );
};

export default Board;
