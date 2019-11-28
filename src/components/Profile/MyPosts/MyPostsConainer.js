// import React from "react";
import { updateNewPostText, addPostActionCreactor } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// // import StoreContext from '../../../store-context'
import {connect} from 'react-redux'

// export default function MyPostsContainer() {
  
//   return (
//     <StoreContext.Consumer> 
//       { (store) => {
//         debugger
//           let state = store.getState()

//           function addPost () {
//             store.dispatch(addPostActionCreactor())
//           }
        
//             let onPostChange = (text) => {
//             store.dispatch(updateNewPostText(text))
//           }
//           return (
//           <MyPosts 
//               updateNewPostText={onPostChange} 
//               addPost={addPost}
//               posts={state.profilePage.posts}
//               newPostText={state.profilePage.newPostText}
//           />
//         )}
//       }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostText(text))
    },
    addPost: () => {
      dispatch(addPostActionCreactor())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
