import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

export default function Dialogs( {sendMessage ,updateNewMessageText, dialogsPage} ) {
  let newMessage = dialogsPage.newMessageText
  let state = dialogsPage

  let dialogElements = state.dialogs.map( item => <DialogItem name={item.name}  id={item.id}key={item.id} />)

  let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} />)

  const addMessageInOurBody = () => {
    sendMessage()
  }
  
  let handleAddMessage = (e) => {
    let message = e.target.value
    updateNewMessageText(message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>

      <div>
        <div><textarea onChange={handleAddMessage} value={newMessage} ></textarea></div>
        <div><button onClick={addMessageInOurBody}>Добавить сообщение</button></div>
      </div>
    </div>
  );
}
