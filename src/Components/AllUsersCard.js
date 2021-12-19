import Card from "./Card";
import "./component.css";
const AllUsersCard = ({ users }) => {
 
const geterateKey = () => {
  return String(Math.random() * 100)
}
 
  return users.map((user, index) => {
    const allGrades = user.grades;
    const uKey = geterateKey() + index;
    return (
      <div className="allUserCards-container" key={user.id} >
        <Card user={user} allGrades={allGrades} eachKey={uKey}/>
      </div>
    );
  })
};

export default AllUsersCard;
