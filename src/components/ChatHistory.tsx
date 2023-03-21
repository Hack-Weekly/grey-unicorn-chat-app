// -----------------------------------------------
//  Box containing all previous messages to the chat
// -----------------------------------------------

// Chat Item Type. Check /types/ChatItem for details
import ChatItem from "../types/ChatItem";

import ChatItemBox from "./ChatItemBox";

interface ArrayChatItems {
	content: Array<ChatItem>
}

const chatHistory = document.getElementById("chat-history")

const ChatHistory = ({content}: ArrayChatItems) => {
	chatHistory?.scrollTo(0, chatHistory.scrollHeight)
	return (
		<div id="chat-history" className="chat-history">
			{
				content?.length > 0 && content.map(item => {
					return <ChatItemBox username={item.username} message={item.message} timestamp={item.timestamp} />
				})
			}
		</div>
	)
	
}

export default ChatHistory
