import { PayloadAction } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { INCREMENT, REDUCE } from "../actions/actions";
import { RootState } from "./store";

interface IState {
  count: number;
}

const defaultState: IState = {
  count: 0,
};

export const countReducer = (state: IState = defaultState, action: any): IState => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }

    case REDUCE:
      return {
        count: state.count - 1
      }

    default:
      return defaultState;
  }
};

export const selectCount = (state: RootState) => state.count
