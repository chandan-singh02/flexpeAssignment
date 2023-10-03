import { createSlice } from "@reduxjs/toolkit";
let id = 101;
const initialState = {
  tasks: [],
  completedTasks: [],
  hasCompletedTasks: false,
  count: 0,
};
export const todoTask = createSlice({
  name: "todoTask",
  initialState,
  reducers: {
    todoAddTask: (state, action) => {
      const todotask = {
        id: id++,
        text: action.payload.text,
        date: new Date(Date.now()).toISOString(),
        description: action.payload.description,
      };
      state.tasks.push(todotask);
      state.count += 1;
    },
    completedTask: (state, action) => {
      const taskToComplete = state.tasks.find(
        (task) => task.id === action.payload.id
      );

      if (taskToComplete) {
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
      }

      state.completedTasks.push(taskToComplete);
      state.count -= 1;
      state.hasCompletedTasks = true;
    },
    updateTasks: (state, action) => {
      state.tasks = state.tasks.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    removeNewTasks: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.count -= 1;
    },
    removeCompletedTask: (state, action) => {
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== action.payload.id
      );
    },
    removeAllTasks: (state) => {
      state.completedTasks = [];
    },
  },
});
export const {
  todoAddTask,
  completedTask,
  updateTasks,
  removeNewTasks,
  removeCompletedTask,
  removeAllTasks,
} = todoTask.actions;
export default todoTask.reducer;
