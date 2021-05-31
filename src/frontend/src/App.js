/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/1/21, 12:38 AM
 * Copyright (c) 2021. All rights reserved.
 */

import "./App.scss";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {TeamPage} from "./pages/TeamPage";
import {MatchPage} from "./pages/MatchPage";
import {HomePage} from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Router>
                <h1 className="app-header"><Link to={"/"}>IPL DASHBOARD</Link></h1>
                <Switch>
                    <Route path="/teams/:teamName/matches/:year">
                        <MatchPage/>
                    </Route>
                    <Route path="/teams/:teamName">
                        <TeamPage/>
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
