import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./topbar.css";

const TopBar = (props) => {
  const {userState} = useContext(UserContext);
  const [user, setUser] = userState;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        { !user.id ? 
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          </ul>
        : 
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/login" color= "inherit" onClick={() => { setUser({}); localStorage.removeItem('userId') }}>LOGOUT</Link> 
            </li>
          </ul>
        }
      </div>
      <div className="topRight">
        {user.id ? (
          null
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default TopBar
