import { Component, OnInit } from "@angular/core";
import { User } from "src/app/core/models/user";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromRoot from "@kranel/app/reducers";
import { loadUsers } from "@kranel/app/core/actions/admin.actions";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(fromRoot.getUsers);
  }
}
