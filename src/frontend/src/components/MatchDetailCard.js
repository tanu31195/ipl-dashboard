/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/30/21, 11:27 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React} from "react";
import {Link} from "react-router-dom";

import "./MatchDetailCard.scss"

export const MatchDetailCard = ({match, teamName}) => {
    if (!match) return null;
    const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
    const opponentTeamRoute = `/teams/${opponentTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div className={isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard lost-card"}>
            <div className="match-details">
                <span className="match-vs">vs</span>
                <h1><Link to={opponentTeamRoute}>{opponentTeam} </Link></h1>
                <h3 className="match-date">on {match.date}</h3>
                <h3 className="match-venue">at {match.venue}</h3>
                <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
            <div className="match-additional-details">
                <h3>First innings</h3>
                <p>{match.team1}</p>
                <h3>Second innings</h3>
                <p>{match.team2}</p>
                <h3>Man of the match</h3>
                <p>{match.playerOfMatch}</p>
                <h3>Umpires</h3>
                <p>{match.umpire1} & {match.umpire2}</p>
            </div>
        </div>
    );
}
