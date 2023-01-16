import { IPost } from "./postsType";
import { IUser } from "./usersTypes";

export type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};
export interface ItodoState {
  todo: Array<ITodo>;
}

export interface IPostsState {
  posts: Array<IPost>;
}

export interface IUsersState {
  users: Array<IUser>;
  error: string | any
}
