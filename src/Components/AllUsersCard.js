import Card from "./Card";
import "./component.css";
const AllUsersCard = ({ users }) => {
  console.log(users, "alluserscard");
  return users.map((user) => {
    return (
      <div className="allUserCards-container" key={user.id}>
        <Card user={user} />
      </div>
    );
  });
};

export default AllUsersCard;
