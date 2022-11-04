import React from 'react'
import MessageCreator from './message-creator'
import MessageList from './message-list'

const Message: React.FC = () => {
    return (
        <div>
            <p>Name of chat / user</p>
            <MessageList />
            <MessageCreator />
        </div>
    )
}

export default Message