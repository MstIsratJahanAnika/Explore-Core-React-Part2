export default function Counter(){
    // css
    const CounterStyle = {
        border: '2px solid red'
    }
    return (
        <div style={CounterStyle}>
            <h3>Count: </h3>
            <button>Add</button>
        </div>
    )
}