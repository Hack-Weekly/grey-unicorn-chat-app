// -----------------------------------------------
// Singular Message To Be Placed In Chat History
// -----------------------------------------------

import React from "react";
// Singular chat item

import ChatItem from "../types/ChatItem";

interface ChatItemProps {
	name: String;
	message: String;
	timestamp: number; // optional
}

const ChatItemBox: React.FC<ChatItemProps>= ({name, message, timestamp}) => {
	return (
		<div className="chat-item">
			<p>{name}</p>
			<p>{message}</p>
			<p>{timestamp}</p>
		</div>
	)
}

export default ChatItemBox
