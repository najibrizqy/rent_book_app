import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BookDetail from "./Pages/BookDetail";
 
const App =  () => {
  return (
    <Router>
      <Switch>
          <Route path={'/login'} component={Login} /> 
          <Route path={'/home'} component={Home} />
          <Route path={'/signup'} component={Signup} />
          <Route path={'/book_detail'} component={BookDetail} />
          <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
 
export default App;