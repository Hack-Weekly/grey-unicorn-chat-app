import React from "react";

import { useFirebaseContext } from "../context/FirebaseContext"

const Header = () => {
	const {signInWithGoogle,logOut, currentUser} = useFirebaseContext();
	return (
	<div className="header">
		{currentUser
			? <React.Fragment>
				<div className="header--login">
					<button className="logout--btn" onClick={logOut}><img className="x" src="/src/assets/x.png" alt="logout button"/></button>
				  <p>{currentUser.displayName} has entered the chat</p>
				</div>
					
				</React.Fragment>
			: 
			// <button onClick={signInWithGoogle}>Sign in with Google</button>
			""
		}
	</div>
		
	)
}

export default Header
