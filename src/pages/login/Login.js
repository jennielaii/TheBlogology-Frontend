import axios from "axios";
import { useState, useContext } from "react";
import "./login.css";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/user/login", {
        email: email,
        password: password,
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" disabled={null}>
          Login
        </button>
      </form>
    </div>
  );
}
