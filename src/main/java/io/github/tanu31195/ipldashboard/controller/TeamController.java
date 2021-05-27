/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/27/21, 12:57 PM
 * Copyright (c) 2021. All rights reserved.
 */

package io.github.tanu31195.ipldashboard.controller;

import io.github.tanu31195.ipldashboard.model.Team;
import io.github.tanu31195.ipldashboard.repository.MatchRepository;
import io.github.tanu31195.ipldashboard.repository.TeamRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeamController {

    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));

        return team;
    }
}
