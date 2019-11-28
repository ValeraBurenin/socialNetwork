import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsConainer'
import ProfileInfo from './Profileinfo/Profileinfo'

export default function Profile() {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}
