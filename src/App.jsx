import './App.css'

function App() {

  function handleClick(){
    alert('I am clicked');
  }

  // arrow function, use mostly 
  const handleClick3 = ()=>{
    alert('I am clicked 3rd time');
  }

  // parameter pass diye event handling
  const handleAdd4 = (num)=>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Get started</h1>
      {/* <button onClick={handleClick()}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>

      {/* evabe kora jay but korbo na */}
      <button onClick={function handleClick2(){
        alert('I am also clicked');
      }}>Click Me 2nd time</button>

      <button onClick={handleClick3}>Click Me 3rd time</button>

      {/* arrow function direct ekhane use kora jay, majhe moddhe kora hobe */}
      <button onClick={()=>{
        alert('I am clicked for 4th time');
      }}>Click Me 4th time</button>

      {/* parameter pass diye event handling */}
      <button onClick={()=> handleAdd4(7)}>Click Add 5</button>

    </>
  )
}

export default App
