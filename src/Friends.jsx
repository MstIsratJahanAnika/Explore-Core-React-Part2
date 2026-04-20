import { use } from "react";

export default function Friends({FriendsDataLoad}){

    const friendsData = use(FriendsDataLoad);
    console.log(FriendsDataLoad);

    return (
        <div>
            <h3>Friends: {friendsData.length}</h3>
        </div>
    )
}