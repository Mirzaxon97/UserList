


export default function load(){
    return(
        fetch('https://reqres.in/api/users')
        .then((response)=>response.json())
        .then((result)=>result)
        .catch((error)=>console.log(error))
    )
}