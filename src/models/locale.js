import { observable } from "mobx";

export default class LoginModel {
  id = Math.random();
  @observable locale;

  constructor(locale) {
    this.locale = locale;
  }
}