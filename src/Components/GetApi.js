import { useState, useEffect } from "react";
import AllUsersCard from "./AllUsersCard";
import "./component.css";
import SearchInput from "./SearchInput";


const GetApi = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const users = await response.json();
      setGetUsers(users.students);
    };
    getUsers();
  }, []);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="api-container">
      <SearchInput inputChangeHandler={inputChangeHandler} />
      <AllUsersCard
        users={getUsers.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(input.toLowerCase()) ||
            user.lastName.toLowerCase().includes(input.toLowerCase())
          );
        })}
      />
    </div>
  );
};

export default GetApi;
