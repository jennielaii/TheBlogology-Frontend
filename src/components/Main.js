import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../shared/Header";
import BlogForm from "./BlogForm";
import Home from "./Home";
import AuthForm from "./Auth/AuthForm";
import Blog from "./Blog";
import Profile from "./Profile";


const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/blogs/:id"
          render={props => {
            return <Blog {...props} />;
          }}
        />

        <Route
          path="/profile"
          component={props => <Profile {...props} />}
        />
        <Route
          path="/new"
          component={props => <BlogForm {...props} editMode={false} />}
        />
        <Route
          path="/edit/:id"
          component={props => <BlogForm {...props} editMode={true} />}
        />
        <Route
          path="/register"
          component={props => <AuthForm {...props} formType={"signup"} />}
        />
        <Route
          path="/login"
          component={props => <AuthForm {...props} formType={"login"} />}
        />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
