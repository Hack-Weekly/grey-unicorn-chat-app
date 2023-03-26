import React from "react";

import { useFirebaseContext } from "../context/FirebaseContext"

const Header = () => {
	const {signInWithGoogle,logOut, currentUser} = useFirebaseContext();
	return (
	<div className="header">
		{currentUser
			? <React.Fragment>
					<p>Hello, {currentUser.displayName}</p>
					<button onClick={logOut}>Log out</button>
				</React.Fragment>
			: 
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		}
	</div>
		
	)
}

export default Header
