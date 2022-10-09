import { observable, action } from "mobx";

export interface IUserStore {
  id: string;
  name?: string;
  pic?: string;
}

export class UserStore {
  @observable id = "id";
  @observable name = "name";
}
