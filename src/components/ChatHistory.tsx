// -----------------------------------------------
//  Box containing all previous messages to the chat
// -----------------------------------------------

// Chat Item Type. Check /types/ChatItem for details
import ChatItem from "../types/ChatItem";

import ChatItemBox from "./ChatItemBox";

const ChatHistory = (/*messageHistory: Array<ChatItem>*/) => {
	// One possible method of rendering

	// let renderedChatItems: any = []

	// messageHistory.forEach((item: ChatItem, i: Number) => {
	// 	renderedChatItems.push(<ChatItem message="" username="" timestamp={new Date()} /> );
	// })

	return (
		<div className="chat-history">
			{
				//renderedChatItems
			}
		</div>
	)
	
}

export default ChatHistory
