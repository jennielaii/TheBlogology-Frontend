import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {userState} = useContext(UserContext);
  const [user, setUser] = userState;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/user/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      await localStorage.setItem("userId", res.data.userId);
      await setUser(res.data.user)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={null}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
