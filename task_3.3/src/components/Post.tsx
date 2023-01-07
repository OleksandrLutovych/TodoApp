import { IPost } from "../types/postsType";

interface PostsProps {
  posts: IPost;
}

const Post = ({ posts }: PostsProps) => {
  return (
    <div style={{ borderBottom: "1px solid rgb(173, 173, 173)" }}>
      <div style={{ marginLeft: "10px" }}>
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
