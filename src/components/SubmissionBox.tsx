// ----------------------------------------------
// Box Containing Submission Form To Send Message
// ----------------------------------------------
import { useRef } from "react";
import { useFirebaseContext } from "../context/FirebaseContext"

const SubmissionBox: React.FC = () => {

  const {sendMsg} = useFirebaseContext();

  const messageInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (messageInputRef.current) {
      const message = messageInputRef.current.value;
      sendMsg(message);
      messageInputRef.current.value = "";
    }
  };

  return (
    <div className="submission-box">
      <input
        id="message"
        type="text"
        name="Enter your message..."
        ref={messageInputRef}
      />
      <input type="submit" value="Send" onClick={onSubmit} />
    </div>
  );
};

export default SubmissionBox;