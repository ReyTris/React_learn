import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg"></img>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile