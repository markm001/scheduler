package com.ccat.scheduler

import com.ccat.scheduler.service.TokenService
import jakarta.ws.rs.core.Response
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/tokeninfo")
class TokenInfoController(
    private val tokenService: TokenService
) {
    @GetMapping
    fun getTokenInfo(@RequestHeader("Authorization") idToken:String): Response {
        val userToken = tokenService.verifyToken(idToken)

        return if(userToken != null) {
            Response.ok(userToken).build()
        } else {
            Response.status(Response.Status.UNAUTHORIZED).build()
        }
    }
}