import Post from "../components/Post";
import React, { useEffect, useState } from "react";
import { IPost } from "../types/postsType";
import { addfetchPosts, fetchPosts } from "../reducers/PostsReducer";
import { useAppDispatch, useAppSelector } from "../reducers/hook";
import classes from "../styles//Posts.module.scss";
import ModalForm from "../components/UI/ModalForm";
import Loader from "../components/UI/Loader";
import { useForm } from "react-hook-form";
import { IForm } from "../types/UITypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { postFormValidationSchema } from "../validation/formValidationSchema";

const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const postsState = useAppSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const [modalState, setModalState] = useState(false);
  const modalOpen = () => setModalState(true);
  const modalClose = () => {
    setModalState(false);
    reset();
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    defaultValues: {
      title: "",
      body: "",
    },
    resolver: yupResolver(postFormValidationSchema),
  });

  const submitForm = (data: IForm) => {
    console.log(data);
    dispatch(addfetchPosts(data));
    reset();
    modalClose();
  };

  return (
    <>
      <div className={classes.pageHeader}>
        <h2>Posts List</h2>
        <ModalForm
          modalOpen={modalOpen}
          modalClose={modalClose}
          modalState={modalState}
          btnText="+ Add New Post"
          formTitle="Add New Post"
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
          errors={errors}
        />
      </div>
      {postsState.error && <h2>{postsState.error}</h2>}
      {postsState.loading ? (
        <Loader />
      ) : (
        <div className={classes.postsContainer}>
          {postsState.posts.map((post: IPost) => (
            <Post posts={post} key={post.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostsList;
