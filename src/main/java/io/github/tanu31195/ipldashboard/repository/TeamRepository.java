/*
 * Created by Tanushka Bandara (https://tanu31195.github.io)
 * Last Modified on 5/26/21, 6:04 PM
 * Copyright (c) 2021. All rights reserved.
 */

package io.github.tanu31195.ipldashboard.repository;

import io.github.tanu31195.ipldashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);
}
