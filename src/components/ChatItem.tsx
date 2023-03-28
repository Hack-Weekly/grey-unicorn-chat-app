// -----------------------------------------------
// Singular Message To Be Placed In Chat History
// -----------------------------------------------

import React from "react";
// Singular chat item

import ChatItemType from "../types/ChatItem";

interface ChatItemProps extends ChatItemType {}


const ChatItem: React.FC<ChatItemProps>= (content: ChatItemProps) => {

	let classNames:Array<String> = ['chat-item']

	return (
		<div key={content.timestamp.toString()} className={classNames.join(' ')}>
			<span className="message">{content.message}</span>
		</div>
	)
}

export default ChatItem
