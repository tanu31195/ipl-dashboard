/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/1/21, 12:29 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useState, useEffect} from "react";

import "./HomePage.scss";
import {TeamTile} from "../components/TeamTile";

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect( () => {
        const fetchTeams = async () => {
            const response = await fetch("http://localhost:8081/teams");
            const data = await response.json();
            setTeams(data);
        };
        fetchTeams();
    }, []);

    return (
        <div className="HomePage">
                {teams.map(team => (
                    <TeamTile key={team.id} teamName={team.teamName}/>
                ))}
        </div>
    )
}
