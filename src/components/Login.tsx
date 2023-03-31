import { Link } from "react-router-dom";
import { useFirebaseContext } from "../context/FirebaseContext"

const Login = () => {
  const {signInWithGoogle,logOut, currentUser} = useFirebaseContext();

    return ( 
        <div className="login">
            <div className="logo-container">
              <img 
                className="banter-box-img" 
                src="/src/assets/Banter_Box.png" 
                alt="BanterBox logo"
              />
            </div>
            <div className="form-container">
                <form className="login-form" action="">
                    <label className="email" htmlFor="email">Email</label>
                    <input 
                      name="email" 
                      type="email"
                      title="email"
                    />
                    <label className="password" htmlFor="password">Password</label>
                    <input 
                      name="password" 
                      type="password"
                      title="password"
                    />
                    <input 
                      type="checkbox"
                      name="checkbox" 
                      title="checkbox"
                    />
                    <label className="checkbox" htmlFor="checkbox">Remember me</label>
                    <div className="submit--login">
                      <Link
                        className="submit--btn" 
                        to="/chat" 
                        type="submit" > Sign in
                      </Link>
                      <Link
                        className="no-account-link" 
                        to="/chat" 
                        >Don't have an account?
                      </Link>
                    </div>
        
                    <div className='g-sign-in-button'>
                      <div className="content-wrapper">
                        <div className='logo-wrapper'>
                          <img 
                          src="./src/assets/g-logo.svg"
                          alt="google logo"
                          />
                        </div>
                        <span className='text-container'>
                          <span onClick={signInWithGoogle}>
                            <Link
                              to="/chat"
                              className="g-btn-link"
                              >Sign in with Google</Link></span>
                        </span>
                      </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Login;