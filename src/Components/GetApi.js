import {useState,useEffect} from 'react';
import AllUsersCard from './AllUsersCard';
import './component.css';

const GetApi = () => {
    const [getUsers, setGetUsers] = useState();

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://api.hatchways.io/assessment/students')
            const users = await response.json();
            setGetUsers(users);
        }
        getUsers();
    }, []);
    
    return (
        <div className='api-container'> 
            <input className='search-input' placeholder='Search by name'></input>
            {getUsers ? <AllUsersCard users={getUsers} /> : "Hello" }
        </div>
    )

}

export default GetApi;