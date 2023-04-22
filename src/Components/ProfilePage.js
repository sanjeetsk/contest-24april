import React, { useEffect, useState } from "react";

const ProfilePage = () => {
    const [userState, setUserState] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem("id");
        fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUserState(data));
    }, []);

    const otherUser = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className="profile">
            <h1>Profile Page</h1>
            {
                userState ?
                (
                    <div>
                        <img src={userState.image} alt="pic" />
                        <p>Name: {userState.maidenName}</p>
                        <p>Email: {userState.email}</p>
                        <p>Phone: {userState.phone}</p>
                        <p>Location: {userState.address.city}</p>
                        <p>University: {userState.university}</p>
                        <p>Company: {userState.company.name}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
            <button className="btn" onClick={otherUser}>Other User</button>
        </div>
    );
}

export default ProfilePage;