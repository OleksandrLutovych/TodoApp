import { IPost } from "./postsType";
import { IUser } from "./usersTypes";

export type InsideTodo = {
  id: string;
  title: string;
  completed: boolean;
};
export interface ItodoState {
  todo: Array<InsideTodo>;
}

export interface IPostsState {
  posts: Array<IPost>;
}

export interface IUsersState {
  users: Array<IUser>;
}
