import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} likesCounter={post.likesCounter}/>)
    let newPostElement = React.createRef();

    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value)
    }

    let addPost = () => {
        props.addPost()
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;