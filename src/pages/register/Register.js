import axios from "axios";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { UserContext } from "../../context/userContext";


const Register = () => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:3001/user/register", {email: email, password: password});
      console.log(res)
      setUser(res.data.user)
      localStorage.setItem('userId', res.data.user.id)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

export default Register