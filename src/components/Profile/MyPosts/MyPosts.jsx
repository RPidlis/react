import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { createRef } from "react";



const MyPosts= (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post massage={p.massage} likesCount={p.likesCount}  key={p.id}/>
  ));

  let newPostElement = createRef();

  let addPost = () => {
    props.addPost();
  };

  let onChangePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
        <div>
          <textarea
            onChange={onChangePost}
            ref={newPostElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
