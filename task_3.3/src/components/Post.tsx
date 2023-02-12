import { IPost } from "../types/postsType";
import classes from "../styles/Posts.module.scss";
import { Link } from "react-router-dom";

interface PostsProps {
  body: string;
  title?: string;
  date?: string;
}

const Post = (props: PostsProps) => {
  const { title, body, date } = props;
  return (
    <div className={classes.post_item}>
      <div className={classes.post_item_content}>
        <div className={classes.postItemsBox}>
          {title && (
            <Link to={"/"} className={classes.postTitle}>
              {title}
            </Link>
          )}
          {date ? <span>{date}</span> : <span>just now</span>}
        </div>

        <span className={classes.postBody}>{body}</span>
      </div>
    </div>
  );
};

export default Post;
