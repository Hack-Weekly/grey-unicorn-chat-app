// ------------------------------------
// Container for the entire application
// ------------------------------------

import ChatHistory from "./ChatHistory"
import Footer from "./Footer"
import SubmissionBox from "./SubmissionBox"

const AppContainer = () => {
	return (
		<div className="app-container">
			<ChatHistory />
			<SubmissionBox />
			<Footer />
		</div>
	)
}

export default AppContainer
