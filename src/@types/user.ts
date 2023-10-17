type IUserItem = {
  name: string;
  email: string;
  password: string;

  comparePassword(candidatePassword: string): boolean;
};
