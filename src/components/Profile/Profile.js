import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
        
    )
}

export default Profile