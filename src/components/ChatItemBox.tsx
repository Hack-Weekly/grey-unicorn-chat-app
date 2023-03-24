// -----------------------------------------------
// Singular Message To Be Placed In Chat History
// -----------------------------------------------

import React from "react";
// Singular chat item

import ChatItem from "../types/ChatItem";

interface ChatItemProps extends ChatItem {}

const username = "Frank"

const ChatItemBox: React.FC<ChatItemProps>= (content: ChatItemProps) => {

	let classNames:Array<String> = ['chat-item']

	content.username === username ? classNames.push('user') : classNames.push('friend')

	return (
		<div key={content.timestamp.toString()} className={classNames.join(' ')}>
			<span className="username">{content.username}</span>
			<span className="message">{content.message}</span>
			<span className="timestamp">{content.timestamp.toLocaleTimeString()}</span>
		</div>
	)
}

export default ChatItemBox
