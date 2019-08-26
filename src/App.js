import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BookDetail from "./Pages/BookDetail";
import store from './Public/Store';
 
const App =  () => {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path={'/login'} component={Login} /> 
          <Route path={'/home'} component={Home} />
          <Route path={'/signup'} component={Signup} />
          <Route path={'/book_detail/:id'} component={BookDetail} />
          <Redirect to="/login" />
        </Provider>
      </Switch>
    </Router>
  );
};
 
export default App;