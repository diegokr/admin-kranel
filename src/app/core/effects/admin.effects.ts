import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { UserService } from "@kranel/app/admin/user/services/user.service";
import { User } from "../models/user";
import { loadUsersSuccess, loadUsers } from "../actions/admin.actions";

@Injectable()
export class AdminEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => {
      return this.userService
        .getUsers()
        .pipe(map((users: User[]) => loadUsersSuccess({ payload: users })));
    })
  );
  constructor(private actions$: Actions, private userService: UserService) {}
}
