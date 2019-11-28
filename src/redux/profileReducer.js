let ADD_POST = 'ADD_POST'
let UPDATE_NEW_POSTTEXT = 'UPDATE_NEW_POSTTEXT'

let initialState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 10 },
      { id: 3, message: "No no no", likesCount: 5 },
      { id: 4, message: "Yes yes yes", likesCount: 3 }
    ],
    newPostText: "it-camasutra"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
          return {
            ...state,
            posts: [...state.posts, {id: 5,
            message: state.newPostText,
            likesCount: 0}],
            newPostText: "",
          }
        } 
        case UPDATE_NEW_POSTTEXT: {
          return {
            ...state,
            newPostText: action.newText
          }
        }
        default: {
          return state
        }
    }
}

export const addPostActionCreactor = () => ({
    type: ADD_POST
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POSTTEXT, newText: text
})

export default profileReducer