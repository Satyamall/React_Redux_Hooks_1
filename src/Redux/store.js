import { createStore } from "redux";
import { reducer } from "./app/reducer";

export const store = createStore(reducer);
