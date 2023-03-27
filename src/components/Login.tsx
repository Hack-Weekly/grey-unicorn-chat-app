const Login = () => {
    //put functions here 




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
                <form action="">
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
                    <div className="submit">
                      <input 
                        type="submit" 
                        value="Sign in"
                      />
                      <a 
                      type="url"
                      title="" 
                       >Don't have an account?</a>
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
                          <span>Sign in with Google</span>
                         </span>
                      </div>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Login;