// ------------------------------------
// Container for the entire application
// ------------------------------------

import ChatItem from "../types/ChatItem"
import ChatHistory from "./ChatHistory"
import SubmissionBox from "./SubmissionBox"

const AppContainer = () => {
	let chatHistoryArr: Array<ChatItem> = [{username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()},{username: 'Bob', message:"Blah blah", timestamp: new Date()}, {username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()},{username: 'Bob', message:"Blah blah", timestamp: new Date()}, {username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()}, {username: 'Bob', message:"Blah blah", timestamp: new Date()},{username: 'Frank', message:"Blah", timestamp: new Date()},{username: 'Bob', message:"Blah blah", timestamp: new Date()}, ]
	return (
		<div className="app-container">
			<ChatHistory content={chatHistoryArr} />
			<SubmissionBox />
		</div>
	)
}

export default AppContainer
