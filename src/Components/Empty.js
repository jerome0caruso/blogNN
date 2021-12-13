import './component.css';

const Empty = ({user}) => {
    return (
        <div className="card-container">
            <div className="card-picContainer">
                <img className="card-picture" src='' />
            </div>
            <div className="card-inContainer">
                <h1>None</h1>
                <h4>Email: None</h4>
                <h4>Company: None</h4>
                <h4>Skills: None</h4>
                <h4>Average: None</h4>
            </div>

        </div>
    )
}
export default Empty;