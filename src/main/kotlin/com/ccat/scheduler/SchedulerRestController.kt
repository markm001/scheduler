package com.ccat.scheduler

import com.ccat.scheduler.service.TokenService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class SchedulerRestController(
    private val tokenService: TokenService
) {
    @GetMapping("/users/{id}/teams")
    fun getTeamsForUsers(
        @PathVariable(name="id") userId:String,
        @RequestHeader("Authorization") token:String
    ): List<TeamEto> {
        val userToken = tokenService.verifyToken(token)

        val tokenUID: String = if(userToken != null) {
            userToken.payload.subject
        } else {
            ""
        }

        return if(tokenUID == userId) { listOf(
            TeamEto("abc", "Team A"),
            TeamEto("bcd", "Team B")
        ) }
        else {
            listOf()
        }
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