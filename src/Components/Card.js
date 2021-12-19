import React, { useState, useEffect } from "react";
import "./component.css";
import SearchInput from './SearchInput';
import Button from "./Button";

const Card = ({ user, allGrades, eachKey, getTag, setUserId }) => {
  const [expanded, setExpanded] = useState(false);
  const [avg, setAvg] = useState(0);
  const [getLength, setGetLength] = useState('');
  const [button, setButton] = useState([]);

  const expandHandler = () => {
    setExpanded(!expanded);
  };

  const inputChangeHandler = (e) => {
    setGetLength(e.target.value)
  }

  const handleKeypress = (e) => {
    setUserId(user.id)
    if (e.key === 'Enter' && getLength.length > 2) {
      setButton(getLength)
      
      setGetLength('');
    }
  };
  useEffect(() => {
    getTag(button)
  },[button, setButton])

  const filterAllGrades = () => {
    return allGrades.map((grade, index) => {
      return (
          <li key ={eachKey + index.toString()} className="eachTest">Test {index + 1}:<span className="eachGrade">{grade}%</span></li>
      )
    })
  }

  useEffect(() => {
    const averagesHandler = (userGrades) => {
      setAvg(userGrades.reduce((a, b) => Number(a) + Number(b), 0) / user.grades.length);
    }
    averagesHandler(user.grades);
  }, [])

  return (
    <div className="card-container">
      <div className="card-picContainer">
        <img className="card-picture" src={user.pic} alt="user-profile"/>
      </div>
      <div className="card-inContainer">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <h4>Email: {user.email}</h4>
        <h4>Company: {user.company}</h4>
        <h4>Skills: {user.skill}</h4>
        <h4>Average: {avg} </h4>
        <ul className="allGrades">{expanded ? filterAllGrades() : null}</ul>
        <div className="tags-container">
          {user.tag ? user.tag.map((btn, index) => btn.length > 0 ? <Button key={eachKey + index.toString()} setValue={btn} /> : null) : null}
        </div>
        <SearchInput  value={getLength} inputChangeHandler={inputChangeHandler} searchClass={"tag-input"} pl={"add a tag"} handleKeypress={handleKeypress}/>
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
