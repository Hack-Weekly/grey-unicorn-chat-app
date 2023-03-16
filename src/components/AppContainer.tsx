// ------------------------------------
// Container for the entire application
// ------------------------------------

import ChatHistory from "./ChatHistory"
import SubmissionBox from "./SubmissionBox"

const AppContainer = () => {
	return (
		<div className="app-container">
			<ChatHistory />
			<SubmissionBox />
		</div>
	)
}

export default AppContainer
