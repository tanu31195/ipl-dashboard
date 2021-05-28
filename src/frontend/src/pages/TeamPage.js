/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/28/21, 6:56 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSummaryCard} from "../components/MatchSummaryCard";

export const TeamPage = () => {
    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8081/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },
        [teamName]
    );
    if (!team || !team.teamName) {
        return <h1>Team Not found</h1>
    }
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matches[0]} teamName={team.teamName}/>
            {team.matches.slice(1).map(match => <MatchSummaryCard match={match} teamName={team.teamName}/>)}
        </div>
    );
}
