// import React from "react";
import Dialogs from './Dialogs'
import { updateTextInput, addMessageToList } from "../../redux/dialogsReducer";
import {connect} from 'react-redux'
// import StoreContext from '../../store-context'

// function DialogsContainer({store}) {

//   return (
//     <StoreContext.Consumer>
//       { (store) => {
//         let state = store.getState()

//         const addMessageInOurBody = () => {
//           store.dispatch(updateNewMessageBodyCreator())
//         }
        
//         let handleAddMessage = (message) => {
//           store.dispatch(updateNewMessageText(message))
//         }
//         return (
//           <Dialogs 
//               updateNewMessageText={handleAddMessage}
//               sendMessage={addMessageInOurBody}
//               dialogsPage={state.dialogsPage}
//           />
//         )
//       }
//     }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageToList())
    },
    updateNewMessageText: (message) => {
      dispatch(updateTextInput(message))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
