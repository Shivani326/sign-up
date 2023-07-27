export default function Register(){

    const registerUser= async(e)=>{
        e.preventDefault();
        fetch('http://localhost:3000/api/register',{
            method: "post",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({email,password})
        })
    }
}