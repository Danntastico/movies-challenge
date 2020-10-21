import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { App } from '../App'
import { Action } from 'views/Action'
import { Adventure } from 'views/Adventure'
import { Animation } from 'views/Animation'
import { Children } from 'views/Children'
import { Comedy } from 'views/Comedy'
import { Crime } from 'views/Crime'
import { Documentary } from 'views/Documentary'
import { Drama } from 'views/Drama'
import { Fantasy } from 'views/Fantasy'
import { Top100 } from 'views/Top100'

export const AppRouter = () =>(
    <Router>
        <div>
            <Switch>
                <Route path="/">
                    <Top100 />
                </Route>
                <Route path="/action">
                    <Action />
                </Route>
                <Route path="/adventure">
                    <Adventure />
                </Route>
                <Route path="/animation">
                    <Animation />
                </Route>
                <Route path="/children">
                    <Children />
                </Route>
                <Route path="/comedy">
                    <Comedy />
                </Route>
                <Route path="/crime">
                    <Crime />
                </Route>
                <Route path="/documentary">
                    <Documentary />
                </Route>
                <Route path="/drama">
                    <Drama />
                </Route>
                <Route path="/fantasy">
                    <Fantasy />
                </Route>
            </Switch>
        </div>
    </Router>
)