import { useEffect, useState } from "react"

export default function Players() {

    const [players, setPlayers] = useState([]); //state variable, count update hoye ja hobe - players

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []); //callback function & dependency list

    return (
        <div className="class">
            <h3>Players: {players.length}</h3>
            <ol>
                {
                    players.map(player => <li>{player.name}</li>)
                }
            </ol>
        </div>
    )
}