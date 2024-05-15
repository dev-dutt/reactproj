import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dev-dutt')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])


    return(
        <>
        <div className="col-12">
        <div className="col-6 text-center bg-green-200">
        <img src={data.avatar_url} className="w-20" alt="Profile Pic" />

        <h1 className="p-4 bg-blue-200">Github Followers :{ data.followers} </h1>
        </div>
        </div>
        </>
    )
}

export default Github;

export const getGithubInfo = async() => {
    const response = await
    fetch('https://api.github.com/users/dev-dutt')

    return response.json();

}