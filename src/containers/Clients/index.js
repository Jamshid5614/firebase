import app, {db} from '../../configs/firebase';
import {useState,useEffect} from 'react';

export default function Clients () {

    const [users,setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await db.collection('Users').get();
            const data = res.docs;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => fetchUsers(),[])

    return <>

    </>

}












