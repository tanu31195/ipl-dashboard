import {React} from "react";

export const MatchSummaryCard = ({match}) => {
    return (
        <div className="MatchSummaryCard">
            <p>{match.team1} vs {match.team2}</p>
        </div>
    );
}
