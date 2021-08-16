import React from 'react';

const Login = (props) => {

    const {
        email,
        setEmail, 
        password, 
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError, 
    } = props;

    return(
        <section className='login'>
            <div className="loginContainer">
                <label>User email</label>
                {/* autofocus => focuses when page loads */}
                <input 
                    type="text" 
                    autoFocus required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input 
                    type="password" 
                    autoFocus required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <div>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>
                                Need to create an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>
                                Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>    
        </section>
    )
}

export default Login;