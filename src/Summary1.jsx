/**
 * Components
 * jsx kivabe likhe, kaj kore, JS kivabe conncted hoy 
 * 
 * Props
 * Conditional rendering 
 * event handling 
 * [state] useState
 * 
 */

/**
 * further jante hobe 
 * 
 * server theke data load kobe kivabe niye ashte hobe 
 * 
 * ja ja proyojon 
 * 1. API: URL (json placeholder - example) - (https://jsonplaceholder.typicode.com/users)
 * 2. fetch()
 * 
 */


// data load or data promise -> 2 types
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data)); // je data pao ta diye kisu ekta koro

// const loadData = async()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }


/**
 * 1. jsx er khetre data load er shomoy
 *  fetch koro and json a convert koro, ei porjonto same thakbe, js er moto e
 * 
 * 2. wrap data loading component in suspense
 */