import { createReducer, on } from "@ngrx/store";
import { loadUsersSuccess } from "../actions/admin.actions";
import { User } from "../models/user";

export const statusFeatureKey = "status";

export interface State {
  users: User[];
}

export const initialState: State = {
  users: []
};

export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { payload }) => ({ ...state, users: payload }))
);

export const getUsers = (state: State) => state.users;
