import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { App } from '../App'

export const AppRouter = () =>(
    <Router>
        <div>
            <Switch>
            <Route path="/">
                <App />
            </Route>
            </Switch>
        </div>
    </Router>
)