import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsConainer'
import ProfileInfo from './Profileinfo/Profileinfo.jsx'

export default function Profile () {
  return (
    <div className="profileWrapper">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
