import Post from "../components/Post";
import { useEffect, useState } from "react";
import { IPost } from "../types/postsType";
import { addPosts, fetchPosts } from "../reducers/PostsReducer";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import classes from "../components/Posts.module.scss";
import ModalForm from "../components/UI/ModalForm";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="subNav">
        <h2>Posts List</h2>
        <ModalForm btnText="+ Add Post List" formTitle="Add New Post" />
      </div>
      <div className={classes.postsContainer}>
        {posts.map((post: IPost) => (
          <Post posts={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
