import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from 'components/navbar/Navbar';
import { SearchBy } from "views/SearchBy";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () =>(
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route  exact path='/search' component={SearchBy} />
                <Route path='/' component={DashBoardRoutes}/>
            </Switch>
        </div>
    </Router>
)