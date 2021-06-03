/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/2/21, 11:59 PM
 * Copyright (c) 2021. All rights reserved.
 */

import React, {useState, useEffect} from "react";

import "./HomePage.scss";
import {TeamTile} from "../components/TeamTile";

export const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect( () => {
        const fetchTeams = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
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
