/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/31/21, 9:18 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React} from "react";
import {Link} from "react-router-dom";

import "./MatchSummaryCard.scss"

export const MatchSummaryCard = ({match, teamName}) => {
    if (!match) return null;
    const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
    const opponentTeamRoute = `/teams/${opponentTeam}`;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div className={isMatchWon ? "MatchSummaryCard won-card" : "MatchSummaryCard lost-card"}>
            <span className="match-vs">vs</span>
            <h2><Link to={opponentTeamRoute}>{opponentTeam} </Link></h2>
            <h5 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h5>
        </div>
    );
}
