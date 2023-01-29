import Post from "../components/Post";
import { useEffect, useState } from "react";
import { IPost } from "../types/postsType";
import { fetchPosts } from "../reducers/PostsReducer";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import classes from "../styles//Posts.module.scss";
import ModalForm from "../components/UI/ModalForm";
import Loader from "../components/UI/Loader";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="subNav">
        <h2>Posts List</h2>
        <ModalForm btnText="+ Add Post List" formTitle="Add New Post" />
      </div>
      {postsState && <h2>{postsState.error}</h2> }
      {postsState.loading ? (
        <Loader/>
      ) : (
        <div className={classes.postsContainer}>
          {postsState.posts.map((post: IPost) => (
            <Post posts={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;
