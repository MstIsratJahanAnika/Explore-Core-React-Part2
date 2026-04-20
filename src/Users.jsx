import { use } from "react"

export default function Users({fetchData}){ //destructuring

    const usersData = use(fetchData);

    console.log(usersData);
    return(
        <div className="card">
            <h3>Users: {usersData.length}</h3>
        </div>
    )
}