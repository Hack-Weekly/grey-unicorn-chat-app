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
			<p className="name">{name} <img className="user" src="/src/assets/user.png" alt="user icon" /></p>
			<p className="message">{message}</p>
			<p>{timestamp}</p>
		</div>
	)
}

export default ChatItemBox
