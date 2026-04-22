import './App.css'

import Counter from './Counter';

import Batsman from './Batsman';

import Users from './Users';

import Friends from './Friends';

import Posts from './posts';

import Players from './Players';

// auto import hoye jay jokhon <Suspense> likha hoy
import { Suspense } from 'react';


// user component er jonno data fetch
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())


// Friends component er jonno data fetch
// const fetchFriends = async() =>{
//   const res =await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json(); 
//   // promise return korbe 
// }


// Post er data fetch 
const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const postsPromise = fetchPosts();

  // fetchFriends er kaj 
  // const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked');
  }

  // arrow function, use mostly 
  const handleClick3 = () => {
    alert('I am clicked 3rd time');
  }

  // parameter pass diye event handling
  const handleAdd4 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Get started</h1>

      <Players></Players>


    <Suspense fallback={<h4>Posts are Loading...</h4>}>
      <Posts PostsPromise={postsPromise}></Posts> 
      {/* prothom ta props */}
    </Suspense>


    {/* suspense er pet er moddhe component */}
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchData = {fetchUsers}></Users> */}
        {/* props pathalam */}
      {/* </Suspense> */}

      {/* Friends.jsx er jonno suspense */}
      {/* <Suspense fallback={<h3>Friends are for short time, so value them</h3>}>
        <Friends FriendsDataLoad = {friendsPromise}></Friends>
      </Suspense> */}


      <Counter></Counter>

      <Batsman></Batsman>

      <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
        {/* <button onClick={handleClick()}>Click Me</button> */}
        <button onClick={handleClick}>Click Me</button>

        {/* evabe kora jay but korbo na */}
        <button onClick={function handleClick2() {
          alert('I am also clicked');
        }}>Click Me 2nd time</button>

        <button onClick={handleClick3}>Click Me 3rd time</button>

        {/* arrow function direct ekhane use kora jay, majhe moddhe kora hobe */}
        <button onClick={() => {
          alert('I am clicked for 4th time');
        }}>Click Me 4th time</button>

        {/* parameter pass diye event handling */}
        <button onClick={() => handleAdd4(7)}>Click Add 5</button>
      </div>
    </>
  )
}

export default App
