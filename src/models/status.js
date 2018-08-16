import { observable } from "mobx";

export default class LoginModel {
  id = Math.random();
  @observable loading;
  @observable info;
  @observable error;
  @observable success;
  @observable finished = false;

  constructor(title) {
    this.loading = loading;
    this.info = info;
    this.error = error;
    this.success = success;
  }
}
