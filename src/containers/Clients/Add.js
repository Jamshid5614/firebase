import {useState} from 'react';
import app, {db} from '../../configs/firebase';


export default function Add () {

    const [user,setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const inputHandler = e => {
        const {name,value} = e.target;
        setUser({...user,[name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await db.collection('Users').add(user)
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
        } catch (error) {
            console.error(error)
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="first name" onChange={inputHandler} />
            <input type="text" name="last_name" placeholder="last name" onChange={inputHandler} />
            <input type="text" name="email" placeholder="email" onChange={inputHandler} />
            <input type="text" name="password" placeholder="password" onChange={inputHandler} />
            <button type="submit">submit</button>
        </form>
    </>
}





