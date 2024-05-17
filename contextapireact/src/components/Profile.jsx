import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
   

    const {user}= useContext(UserContext)

    if(!user) return(<div>please login</div>)

    return(
        <>
        <h1>Hi ! {user.username}</h1>
        </>
    )
}

export default Profile;