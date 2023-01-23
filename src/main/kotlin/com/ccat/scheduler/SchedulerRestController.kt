package com.ccat.scheduler

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class SchedulerRestController {

    @GetMapping("/users/{id}/teams")
    fun getTeamsForUsers(
        @PathVariable(name="id") userId:String): List<TeamEto> {
        return listOf(
            TeamEto("abc", "Team A"),
            TeamEto("bcd", "Team B")
        )
    }

    @GetMapping("/teams/{id}/members")
    fun getMembersForTeam(
        @PathVariable(name="id") teamId:String): List<MemberEto> {
        return if(teamId == "abc") { listOf(
            MemberEto("abc", "Member 1"),
            MemberEto("bcd", "Member 2"),
            MemberEto("cde", "Member 3")) }
        else { emptyList() }
    }
}

data class TeamEto(
    val id: String,
    val teamname: String
)

data class MemberEto(
    val id: String,
    val nickname: String
)