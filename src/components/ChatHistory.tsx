// -----------------------------------------------
//  Box containing all previous messages to the chat
// -----------------------------------------------
import { useState, useEffect } from "react";
import { ref, onValue, orderByChild, limitToLast } from "firebase/database";
import { db } from "../firebase/config";
import ChatItemBox from "./ChatItemBox";
import Header from "./Header";

interface ChatMessage {
	id: string;
	name: string;
	messages: string;
	timestamp: number;
}

const ChatHistory = () => {
	const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

	useEffect(() => {
		const msgRef = ref(db, "messages");
		//const sortedMsgRef = orderByChild(msgRef, "timestamp");  
		//const latestMsgRef = limitToLast(msgRef, 100); // limit and load the most recent 100 messages

		onValue(msgRef, (snapshot) => {
			const chatMessages: ChatMessage[] = [];
			snapshot.forEach((childSnapshot) => {
				const message: ChatMessage = {
					id: childSnapshot.key as string,
					name: childSnapshot.child("name").val() as string,
					messages: childSnapshot.child("messages").val() as string,
					timestamp: childSnapshot.child("timestamp").val() as number,
					
				};
				chatMessages.push(message);
			});
			setChatMessages(chatMessages.reverse());
		})
	}, [])

	return (
		<div className="chat-history">
			<Header />
			{chatMessages.map((chatMessage) => (
				<ChatItemBox key={chatMessage.id} name={chatMessage.name} message={chatMessage.messages}  timestamp={new Date(chatMessage.timestamp).toLocaleString()} />
			))}
		</div>
	)
}

export default ChatHistory;