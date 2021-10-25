import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)
const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newPost'} placeholder={'What do you think?'}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({ form: 'newPost'})(NewPost)

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCounter={post.likesCounter}/>)

    let onSubmitNewPost = (formData) => {
        props.addPost(formData.newPost)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <NewPostReduxForm onSubmit={onSubmitNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;