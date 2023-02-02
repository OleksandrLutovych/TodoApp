import { IPost } from "../types/postsType";
import classes from "../styles/Posts.module.scss";

interface PostsProps {
  posts: IPost;
}

const Post = ({ posts }: PostsProps) => {
  return (
    <div className={classes.post_item}>
      <div className={classes.post_item_content}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="">
            <b>Title: </b>
            {posts.title}
          </p>
          {posts.date}
        </div>

        <p className="">
          <b>Body: </b>
          {posts.body}
        </p>
      </div>
    </div>
  );
};

export default Post;
