import { use } from "react";

import Friend from "./Friend";

export default function Friends({FriendsDataLoad}){

    const friendsData = use(FriendsDataLoad);
    console.log(friendsData);

    return (
        <div className="card">
            <h3>Friends: {friendsData.length}</h3>

            {
            friendsData.map(eachFriend=> <Friend key={eachFriend.id} bondhu ={eachFriend}></Friend>)
            }
        </div>
    )
}