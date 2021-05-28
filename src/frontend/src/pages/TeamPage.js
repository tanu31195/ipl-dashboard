import {React, useState, useEffect} from "react";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {MatchSummaryCard} from "../components/MatchSummaryCard";

export const TeamPage = () => {
    const [team, setTeam] = useState({matches: []});

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8081/team/Rajasthan%20Royals');
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },
        []
    );
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchSummaryCard match={match}/>)}
        </div>
    );
}
