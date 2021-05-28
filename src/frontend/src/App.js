/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/28/21, 6:33 PM
 * Copyright (c) 2021. All rights reserved.
 */

import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {TeamPage} from "./pages/TeamPage";

function App() {
    return (
        <div className="App">
            <h1>IPL DASHBOARD</h1>
            <Router>
                <Route path="/teams/:teamName">
                    <TeamPage/>
                </Route>
            </Router>
        </div>
    );
}

export default App;
