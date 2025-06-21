'use client';
import styles from './likeUnlikeMe.module.css';
import React, { useState } from 'react';

export default function LikeUnlikeMe() {
    const [count, setCount] = useState(10000);
    const [liked, setLiked] = useState(false);

    const countMe = () => {
        setLiked(previous => !previous);
        setCount(previous => previous + (liked ? 1 : -1));
        console.log(`You liked me ${count} times`);
    }


    return (
        <div className={styles.likeUnlike}>
            <span className={styles.count}>
                {count}
            </span>
            <button className={`${styles.button} ${liked ? styles.liked : styles.unliked}`}
                onClick={countMe}
            >
                <span className={styles.emoji}>
                    {liked ? '😘 Liked' : '🥹 Unliked'}
                </span>
            </button>
        </div>
    )
}