import React from "react";
import LoginPage from "./Components/LoginPage";
import ProfilePage from "./Components/ProfilePage";
import "./index.css";

const App = () => {
    const token = localStorage.getItem("token");
    if(token){
        return <ProfilePage />;
    }
    else{
        return <LoginPage />;
    }
}

export default App;