import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
import HorizontalMenu from 'components/scrollmenu/HorizontalMenu';
import { SearchBy } from "views/SearchBy";

export const DashBoardRoutes = () =>(
    <Router>
        <div>
            <HorizontalMenu/>
            <Switch>
                <Route exact path="/top100">
                    <Top100 />
                </Route>
                <Route exact path="/action">
                    <Action />
                </Route>
                <Route exact path="/adventure">
                    <Adventure />
                </Route>
                <Route exact path="/animation">
                    <Animation />
                </Route>
                <Route exact path="/childrens">
                    <Children />
                </Route>
                <Route exact path="/comedy">
                    <Comedy />
                </Route>
                <Route exact path="/crime">
                    <Crime />
                </Route>
                <Route exact path="/documentary">
                    <Documentary />
                </Route>
                <Route exact path="/drama">
                    <Drama />
                </Route>
                <Route exact path="/fantasy">
                    <Fantasy />
                </Route>
                <Route exact path="/fantasy">
                    <Fantasy />
                </Route>
                <Route exact path="/search">
                    <SearchBy />
                </Route>

                <Redirect to="/Top100" />
            </Switch>
        </div>
    </Router>
)