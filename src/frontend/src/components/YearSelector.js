/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/1/21, 12:32 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {Link} from "react-router-dom";

import "./YearSelector.scss";

export const YearSelector = ({teamName}) => {
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    for (let i = startYear; i <= endYear; i++ ) {
        years.push(i);
    }

    return (
        <ol className="YearSelector">
        {years.map(year => (
            <li key={year}>
                <Link to={`/teams/${teamName}/matches/${year}`}> {year} </Link>
            </li>)
        )}
        </ol>
    )
}
