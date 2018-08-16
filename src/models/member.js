import { observable } from "mobx";

export default class LoginModel {
  id = Math.random();
  @observable loading;
  @observable error;
  @observable uid;
  @observable email;
  @observable emailVerified;
  @observable finished = false;

  constructor(loading, error, uid, email, emailVerified) {
    this.loading = loading;
    this.error = error;
    this.uid = uid;
    this.email = email;
    this.emailVerified = emailVerified;
  }
}

export default class RegisterModel {
  id = Math.random();
  @observable loading;
  @observable firstName;
  @observable lastName;
  @observable signedUp;
  @observable role;
  @observable finished = false;

  constructor(loading, firstName, lastName, signedUp, role) {
    this.loading = loading;
    this.firstName = firstName;
    this.lastName = lastName;
    this.signedUp = signedUp;
    this.role = role;
  }
}