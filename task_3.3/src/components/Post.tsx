import { IPost } from "../types/postsType";
import "./styles.scss";

interface PostsProps {
  posts: IPost;
}

const Post = ({ posts }: PostsProps) => {
  return (
    <div className="post-item">
      <div className="post-item_content">
        <p className="">
          <b>Title: </b>
          {posts.title}
        </p>
        <p className="">{posts.body}</p>
      </div>
    </div>
  );
};

export default Post;
