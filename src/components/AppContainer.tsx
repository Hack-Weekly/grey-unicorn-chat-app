// ------------------------------------
// Container for the entire application
// ------------------------------------

import ChatItemType from "../types/ChatItem"
import ChatHistory from "./ChatHistory"
import SubmissionBox from "./SubmissionBox"

const AppContainer = () => {
	let chatHistoryArr: Array<Array<ChatItemType>> = 
	[
		[
			
			{username: 'Frank', message:"Hey", timestamp: new Date()},
			{username: 'Frank', message:"Whats up", timestamp: new Date()}], 
		[	
			{username: 'Bob', message:"Good afternoon!", timestamp: new Date()}, 
			{username: 'Bob', message:"Nothing new. Hows work?", timestamp: new Date()}
		],
		[	
			{username: 'Timmy', message:"Hey Guys!", timestamp: new Date()}
		],
		
	]
	return (
		<div className="app-container">
			<ChatHistory content={chatHistoryArr} />
			<SubmissionBox />
		</div>
	)
}

export default AppContainer
