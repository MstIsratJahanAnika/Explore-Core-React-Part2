import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);//initial value must or undefined
    const [sixes, setSixes] = useState(0);

    // event handler function je function ta export hobe oi function er moddhe e declare korte hobe
    const handleRunsSingle =()=>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleRunsFour =()=>{
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    }

    const handleRunsSixer=()=>{
        const updatedRuns = runs + 6;

        const updateSixes = sixes + 1;
        setSixes(updateSixes);

        setRuns(updatedRuns);
    }
    return(
        <div>
            <h3>Player: Bongo Bondhu</h3>
            <p><small>Sixer Count: {sixes}</small></p>
            {
                runs > 50 && <p>Your Score: 50+</p>
            }
            <h1>Score: {runs}</h1>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom:'10px', gap: '10px'}}>
                <button onClick={handleRunsSingle}>Singles</button>
                <button onClick={handleRunsFour}>Four</button>
                <button onClick={handleRunsSixer}>Sixer</button>
            </div>
        </div>
    )
}