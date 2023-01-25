import Post from "../components/Post";
import { useEffect } from "react";
import { IPost } from "../types/postsType";
import { fetchPosts } from "../reducers/PostsReducer";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import Button from "../components/UI/Button";
import classes from "../components/Posts.module.scss";

const PostsList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="main">
      <div className="subNav">
        <h2>Posts Listt</h2>
        <Button>+ Add New Post</Button>
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
