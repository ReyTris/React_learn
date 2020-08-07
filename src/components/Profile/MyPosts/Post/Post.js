import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/9/95/2%D1%8506_%D0%A2%D0%BE%D1%84.jpg/revision/latest?cb=20110327131628&path-prefix=ru"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post