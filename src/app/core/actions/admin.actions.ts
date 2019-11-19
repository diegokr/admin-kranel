import { props, createAction } from "@ngrx/store";
import { User } from "../models/user";

export const loadUsers = createAction("[Admin] Load Users");

export const loadUsersSuccess = createAction(
  "[Admin] Load Users Success",
  props<{ payload: User[] }>()
);
