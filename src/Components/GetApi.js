import { useState, useEffect } from "react";
import AllUsersCard from "./AllUsersCard";
import "./component.css";
import SearchInput from "./SearchInput";


const GetApi = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [input, setInput] = useState("");
  const [tag, setTag] = useState([])
  const [inputTag, setInputTag] = useState("")
  const [userId, setUserId] = useState(0);
  

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const users = await response.json();
      const updatedUsers = users.students.map(user => ({...user, tag: []}));
      setGetUsers(updatedUsers);
    };
    getUsers();
  }, []);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const inputChangeTagHandler = (e) => {
    setInputTag(e.target.value);
  };

  const filterNames = () => {
    const users = getUsers.filter(user => {
      return (
        user.firstName.toLowerCase().includes(input.toLowerCase()) ||
        user.lastName.toLowerCase().includes(input.toLowerCase())
      );
    });
    const filteredUsers = users.filter(user => {
      return(user.tag.toString().includes(inputTag))
    });
    return filteredUsers;
  }

  const getTag = (tag) => {
    setTag(tag);
    getUsers.forEach(user => {
      if(user.id === userId) {
        user['tag'].push(tag);
      }
    });
  }
  return (
    <div className="api-container">
      <SearchInput inputChangeHandler={inputChangeHandler} searchClass={"search-input"} pl ={"Search by name"}/>
      <SearchInput inputChangeHandler={inputChangeTagHandler} searchClass={"search-input-tag"} pl ={"Search by tag"}/>
      <AllUsersCard getTag={getTag} setUserId={setUserId}
        users={filterNames()}
      />
    </div>
  );
};

export default GetApi;
