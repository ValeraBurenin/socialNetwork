import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

export default function Dialogs ({ sendMessage, updateNewMessageText, dialogsPage }) {
  const newMessage = dialogsPage.newMessageText
  const state = dialogsPage

  const dialogElements = state.dialogs.map(item => (
    <DialogItem name={item.name} id={item.id} key={item.id} />
  ))

  const messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id} />
  ))

  const addMessageInOurBody = () => {
    sendMessage()
  }

  const handleAddMessage = e => {
    const message = e.target.value
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
        <div><textarea onChange={handleAddMessage} value={newMessage} /></div>
        <div><button onClick={addMessageInOurBody}>Добавить сообщение</button></div>
      </div>
    </div>
  )
}
