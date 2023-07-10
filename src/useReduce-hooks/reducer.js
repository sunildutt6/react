export const CLEAR_LIST = "CLEAR_LIST";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RESET_LIST = "RESET_LIST";
import { data } from "../data";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}"- action-type`);
};
