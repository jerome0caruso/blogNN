import React, { useState, useEffect } from "react";
import "./component.css";

const Card = ({ user }) => {
  const [expanded, setExpanded] = useState(false);
  const [avg, setAvg] = useState(0);
  const [grades, setGrades] = useState([])

  const expandHandler = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const averagesHandler = (userGrades) => {
      setAvg(userGrades.reduce((a, b) => Number(a) + Number(b), 0) / user.grades.length);
    }
    averagesHandler(user.grades);
  }, [])


  return (
    <div className="card-container">
      <div className="card-picContainer">
        <img className="card-picture" src={user.pic} />
      </div>
      <div className="card-inContainer">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <h4>Email: {user.email}</h4>
        <h4>Company: {user.company}</h4>
        <h4>Skills: {user.skill}</h4>
        <h4>Average: {avg} </h4>
      </div>
      <div className="plus-container">
        {expanded ? (
          <button className="btn-expand" onClick={expandHandler}>
            <i className="fas fa-minus"></i>
          </button>
        ) : (
          <button className="btn-expand" onClick={expandHandler}>
            <i className="fas fa-plus"></i>
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
