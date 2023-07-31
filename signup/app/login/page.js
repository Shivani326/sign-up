export default function Login(){

    const registerUser= async(e)=>{
        e.preventDefault();
        fetch('http://localhost:3000/api/login',{
            method: "post",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({email,password})
        })
    }
}