import React from 'react'
import s from './Post.module.css'

const Post = props => {
  return (
    <div className={s.item}>
      <img src="https://im0-tub-ru.yandex.net/i?id=d5f39eb21c3599da57ab2b1fb051af8c&n=33&w=267&h=150" alt="some" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
