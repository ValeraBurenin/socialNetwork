let UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'
let SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your IT?" },
    { id: 3, message: "YO YO YO" },
    { id: 4, message: "I'm fine" }
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Viktor" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Andrey" }
  ],
  newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
         return {
            ...state,
            messages: [...state.messages, {id: 5, message: state.newMessageText}],
            newMessageText: ''
          }
        } 
        case UPDATE_NEW_MESSAGE: {
         return {
             ...state,
             newMessageText: action.newMessageText
          }
        }
        default: {
          return state
        }
    }
}

export const addMessageToList = () => ({
    type: SEND_MESSAGE
  })
  
export const updateTextInput = (text) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessageText: text
})

export default dialogsReducer