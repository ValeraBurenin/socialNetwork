import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

export default function MyPosts ({ updateNewPostText, addPost, posts, newPostText }) {
  const postsElements = posts.map(message => (
    <Post message={message.message} likesCount={message.likesCount} key={message.id} />
  ))

  const newPostElement = React.createRef()

  function onAddPost () {
    addPost()
  }

  const onPostChange = () => {
    const text = newPostElement.current.value
    updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      my post
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
