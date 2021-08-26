import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from "redux-form";

const NewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPost'}/>
            <button>Add Post</button>
        </form>
    )
}

const NewPostReduxForm = reduxForm({ form: 'newPost'})(NewPost)

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCounter={post.likesCounter}/>)

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