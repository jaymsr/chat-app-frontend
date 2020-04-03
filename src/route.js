import React from 'react';
import { Route, IndexRoute } from 'react-router';
import "./App.css";
/**
 * Import all page components here
 */
import App from '../App';
import ChatRoom from './Components/ChatRoom';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <Route path="/ChatRoom" component={ChatRoom} />
  </Route>
);