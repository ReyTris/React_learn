import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first message", likesCount: 17},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likecount={postData[0].likesCount}/>
                <Post message={postData[1].message} likecount={postData[1].likesCount}/>
            </div>
        </div>

    )
}

export default MyPosts