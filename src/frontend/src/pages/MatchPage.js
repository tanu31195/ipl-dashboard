/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/29/21, 2:18 AM
 * Copyright (c) 2021. All rights reserved.
 */

import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {MatchDetailCard} from "../components/MatchDetailCard";

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                console.log(year);
                const response = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };
            fetchMatches();
        },[]
    );
    if (!matches) return null;
    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches.map(match => <MatchDetailCard key={match.id} match={match} teamName={teamName}/>)}
        </div>
    );
}