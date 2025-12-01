import axios from 'axios';
import React, { useState } from 'react'

const AxiosPost = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email){
            setMessage('both fields are required');
            return;
        }
        const usersData = {name , email}
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/users", usersData);
            console.log(res.data);
            setMessage("user submitted successfully")
            
        }catch (error){
            console.error(error)
            setMessage("error submitting user")
        }
    }
  return (
    <div>
        <h2>submit</h2>
            <form onSubmit={handleSubmit }>
                {/* name */}
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                {/* email */}
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
                <button type='submit'>submit</button>

            </form>
            <p>{message}</p>
      </div>
  )
}

export default AxiosPost
