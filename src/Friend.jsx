export default function Friend({bondhu}){

    console.log(bondhu); // ek ek ta object ashbe, of each data
    const {name, email, phone} = bondhu; //object er name property 
    return(
        <div className="card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}