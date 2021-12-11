import './component.css';

const Card = ({user}) => {
    return (
        <div className="card-container">
            <div className="card-picContainer">
                <img className="card-picture" src={user.pic} />
            </div>
            <div className="card-inContainer">
                <h1>{user.firstName.toUpperCase()}</h1>
                <h4>Email: {user.email}</h4>
                <h4>Company: {user.company}</h4>
                <h4>Skills: {user.skill}</h4>
                <h4>Average: {user.grades.reduce((a,b) => Number(a) + Number(b), 0) / user.grades.length}%</h4>
            </div>

        </div>
    )
}
export default Card;