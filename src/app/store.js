import { configureStore } from "@reduxjs/toolkit";
import todoDetails from "../features/todoBoard";
import todoBoard from "../features/todoTasks";

export const store = configureStore({
  reducer: {
    app: todoDetails,
    task: todoBoard,
  },
});
