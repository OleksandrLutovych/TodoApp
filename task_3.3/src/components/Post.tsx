import { IPost } from "../types/postsType";
import classes from "../styles/Posts.module.scss";

interface PostsProps {
  posts: IPost;
}

const Post = ({ posts }: PostsProps) => {
  return (
    <div className={classes.post_item}>
      <div className={classes.post_item_content}>
        <div className={classes.postItemsBox}>
          <p>
            <b>Title: </b>
            {posts.title}
          </p>
          {posts.date}
        </div>

        <p>
          <b>Body: </b>
          {posts.body}
        </p>
      </div>
    </div>
  );
};

export default Post;
