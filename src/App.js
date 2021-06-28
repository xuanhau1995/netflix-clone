import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import ProfileScreen from "./components/ProfileScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //loged out
        dispatch(logout());
      }
    });
    return unsubscribed;
  }, [dispatch]);
  return (
    <div>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
