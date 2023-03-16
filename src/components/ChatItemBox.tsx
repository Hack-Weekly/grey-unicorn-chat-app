// -----------------------------------------------
// Singular Message To Be Placed In Chat History
// -----------------------------------------------

import React from "react";
// Singular chat item

import ChatItem from "../types/ChatItem";

interface ChatItemProps {
	username: String;
	message: String;
	timestamp: Date; // optional
}

const ChatItemBox: React.FC<ChatItemProps>= () => {
	return (
		<div className="chat-item">

		</div>
	)
}

export default ChatItemBox
