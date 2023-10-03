import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  boards: [],
};

export const todoBoard = createSlice({
  name: "todoBoard",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const todotask = {
        id: Math.random() * 100,
        board: action.payload,
      };
      state.boards.push(todotask);
    },
    removeBoard: (state, action) => {
      state.boards = state.boards.filter(
        (task) => task.id !== action.payload.id
      );
    },
  },
});
export const { addBoard, removeBoard } = todoBoard.actions;
export default todoBoard.reducer;
