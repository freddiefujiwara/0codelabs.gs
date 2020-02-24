class User {
  static password(length:number) {
    return Math.random().toString(36).slice(length * -1);
  }
}

export default User;
