// -----------------------------------------------
//  Box containing all previous messages to the chat
// -----------------------------------------------

// Chat Item Type. Check /types/ChatItem for details
import ChatItemType from "../types/ChatItem";
import ChatItemBox from "./ChatItemBox"

const chatHistory = document.getElementById("chat-history")
chatHistory?.scrollTo(0, chatHistory.scrollHeight)

const ChatHistory: React.FC<{content: Array<Array<ChatItemType>>}> = ({content}) => {
	
	return (
		<div id="chat-history" className="chat-history">
			{
				content?.length > 0 && content.map(items => {
					return (
						<ChatItemBox items={items}/>
					)
				})
			}
		</div>
	)
	
}

export default ChatHistory
