/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/31/21, 10:39 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {MatchDetailCard} from "../components/MatchDetailCard";
import {YearSelector} from "../components/YearSelector";

import "./MatchPage.scss"

export const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };
            fetchMatches();
        }, [teamName, year]
    );
    if (matches.length === 0) {
        return <h1>No matches found for {teamName}</h1>
    }
    return (
        <div className="MatchPage">
            <div className="year-selector">
                <h3>Select year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
                <h1 className="page-heading">Matches of {teamName} for the year of {year}</h1>
                {matches.map(match => <MatchDetailCard key={match.id} match={match} teamName={teamName}/>)}
            </div>
        </div>
    );
}
