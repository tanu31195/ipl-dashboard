/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/28/21, 6:55 PM
 * Copyright (c) 2021. All rights reserved.
 */

import {React} from "react";
import {Link} from "react-router-dom";

export const MatchSummaryCard = ({match, teamName}) => {
    if (!match) return null;
    const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
    const opponentTeamRoute = `/teams/${opponentTeam}`;
    return (
        <div className="MatchSummaryCard">
            <h4>vs <Link to={opponentTeamRoute}>{opponentTeam} </Link></h4>
            <h5>{match.matchWinner} won by {match.resultMargin} {match.result}</h5>
        </div>
    );
}
