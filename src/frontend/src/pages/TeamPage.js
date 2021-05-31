/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/31/21, 9:19 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSummaryCard} from "../components/MatchSummaryCard";

import "./TeamPage.scss";

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
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                Wins/Losses
            </div>

            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard match={team.matches[0]} teamName={team.teamName}/>
            </div>

            {team.matches.slice(1).map(match => <MatchSummaryCard key={match.id} match={match} teamName={team.teamName}/>)}
            <div className="more-link">
                <a href="#">More...</a>
            </div>
        </div>
    );
}
