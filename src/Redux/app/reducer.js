import { loadData, saveData } from "../../utils/localStorage";
import { ADD_TODO } from "./actionTypes";

const initState = {
  todos: loadData("todos") || []
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updatedData = [...state.todos, payload];
      saveData("todos", updatedData);
      return {
        ...state,
        todos: updatedData
      };
    }
    default:
      return state;
  }
};

export { reducer };
