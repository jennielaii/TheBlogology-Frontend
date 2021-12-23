import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import env from 'react-dotenv'
import axios from 'axios'

function App() {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;

  const fetchUser = async () => {
    const userId = localStorage.getItem('userId')
    try {
      if (userId) {
        // console.log(userId)
        const response = await axios.get(`${env.BACKEND_URL}/user/verify`, {
          headers: {
            Authorization: userId
          }
        })
        setUser(response.data.user)
      }
    }
    catch (error) { console.log(error) }
  }
  useEffect(()=>{
    fetchUser(); 
  }, [])

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;