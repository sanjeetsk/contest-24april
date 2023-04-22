import React, { useState} from "react";

const LoginPage = () => {
    const [usernameState, setUsernameState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [loginError, setLoginError] = useState("");

    const handleUsernameChange = (e) => {
        setUsernameState(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPasswordState(e.target.value);
    };

    const handleLogin = async (event) => {
        //   event.preventDefault();
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameState,
                password: passwordState,
            }),
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.id);
            window.location.reload();
        } else {
            const error = await response.json();
            setLoginError(error.message);
        }
    };


    return (
        <div className="form">
                <h1>Login Page</h1>
                {
                    loginError && 
                    <p className="errorMsg">{loginError}</p>
                }
                <label>Username:</label>
                <input type="text" value={usernameState} onChange={handleUsernameChange} />
                <br />
                <label>Password:</label>
                <input type="password" value={passwordState} onChange={handlePasswordChange} />
                <br />
                <button type="submit" className="btn" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;