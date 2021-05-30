/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/30/21, 12:10 AM
 * Copyright (c) 2021. All rights reserved.
 */

import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TeamPage} from "./pages/TeamPage";
import {MatchPage} from "./pages/MatchPage";

function App() {
    return (
        <div className="App">
            <h1>IPL DASHBOARD</h1>
            <Router>
                <Switch>
                    <Route path="/teams/:teamName/matches/:year">
                        <MatchPage/>
                    </Route>
                    <Route path="/teams/:teamName">
                        <TeamPage/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
