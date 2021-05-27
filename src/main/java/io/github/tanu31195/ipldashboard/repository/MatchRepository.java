/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/28/21, 1:02 AM
 * Copyright (c) 2021. All rights reserved.
 */

package io.github.tanu31195.ipldashboard.repository;

import io.github.tanu31195.ipldashboard.model.Match;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface MatchRepository extends CrudRepository<Match, Long> {

    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    //    List<Match> getByTeam1AndDateBetweenOrTeam2AndDateBetweenOrderByDateDesc(
//            String teamName1, LocalDate date1, LocalDate date2,
//            String teamName2, LocalDate date3, LocalDate date4
//    );
    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :startDate and :endDate order by date desc")
    List<Match> getMatchesByTeamBetweenDates(
            @Param("teamName") String teamName,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );

    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }
}
