type ChatItem = {
	username: String;
	message: String;
	timestamp: Date; // optional, also optionally stored as a string. Change [Date] to [String] for this to change
}

export default ChatItem;
