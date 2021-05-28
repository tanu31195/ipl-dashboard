/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/28/21, 6:58 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React} from "react";
import {Link} from "react-router-dom";

export const MatchDetailCard = ({match, teamName}) => {
    if (!match) return null;
    const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
    const opponentTeamRoute = `/teams/${opponentTeam}`;
    return (
        <div className="MatchDetailCard">
            <h3>Latest Matches</h3>
            <h4>Match Details</h4>
            <h3>vs <Link to={opponentTeamRoute}>{opponentTeam} </Link></h3>
            <h4>on {match.date}</h4>
            <h4>at {match.venue}</h4>
            <h4>{match.matchWinner} won by {match.resultMargin} {match.result}</h4>
        </div>
    );
}
