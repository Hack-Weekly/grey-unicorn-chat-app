import ChatItemType from "../types/ChatItem";
import ChatItem from './ChatItem';

const username = "Frank"
const ChatItemBox: React.FC<{items: Array<ChatItemType>}> = ( {items} ) => {
  let classNames:Array<String> = ['chat-item-box']

  items?.[0].username === username ? classNames.push('user') : classNames.push('friend')

  return (
    
    <div className={classNames.join(" ")}>
      <div className="user-picture">
        <img src="/user.png" />
      </div>
      {items.map(content => {
        return <ChatItem username={content.username} message={content.message} timestamp={content.timestamp} />
      })}
      
      
    </div>
  )
}

export default ChatItemBox