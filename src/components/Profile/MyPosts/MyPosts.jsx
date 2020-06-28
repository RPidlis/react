import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const MyPosts= (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post massage={p.massage} likesCount={p.likesCount}  key={p.id}/>
  ));

  let addPost = (formData) => {
    props.addPost(formData.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My post</h3>
        <AddPostFormRedux onSubmit={addPost}/>
      </div>
      <div>new post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
        <Field
            component={TextArea}
            name={'newPostText'}
            placeholder={'Enter new post'}
            validate={[required, maxLength10]}
        />
        <div>
          <button>add post</button>
        </div>
      </form>
  );
};

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);
export default MyPosts;
