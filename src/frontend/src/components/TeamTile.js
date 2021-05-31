/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 6/1/21, 12:18 AM
 * Copyright (c) 2021. All rights reserved.
 */

import React from "react";
import {Link} from "react-router-dom";

import "./TeamTile.scss";

export const TeamTile = ({teamName}) => {
    return (
        <div className="TeamTile">
            <h2><Link to={`/teams/${teamName}`}>{teamName}</Link></h2>
        </div>
    )
}
