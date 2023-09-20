import { useState } from "react";


const Simplefrom = () => {
    const [name,setname]=useState(null)
    const [email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
    const[error,setError]=useState(null)
    const handalinput=e =>{
        e.preventDefault();
        if(password.length<6){
            setError("enter more then 6 caractar in password")
        }
        else{
            setError('')
            console.log(name,email,password);
        }
        
        

        
    }
    const handalname=e=>{
        e.preventDefault();
        setname(e.target.value)
    }
    const handlemail=e=>{
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handlepassword=e=>{
        e.preventDefault();
        setPassword(e.target.value)
    }

    return (
        <div>
            <form action="" onSubmit={handalinput}>
                <input onChange={handalname} type="text" name="name" /><br />
                <input onChange={handlemail} type="email" name="email" id="" /><br />
                <input onChange={handlepassword} type="password" required name="password" id="" /><br />
                <input type="submit" value="submit" />
            </form>
            {
                error&&<p>{error}</p>
            }
        </div>
    );
};

export default Simplefrom;