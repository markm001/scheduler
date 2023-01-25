package com.ccat.scheduler

import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.gson.GsonFactory
import jakarta.ws.rs.core.Response
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/tokeninfo")
class TokenInfoController {
    private val jsonFactory = GsonFactory.getDefaultInstance()
    private val transport = NetHttpTransport.Builder().build()
    private val schedulerGoogleClientId =
        setOf("330715887976-c5b9r5v68o73k1uqohddc4sgev8mu02j.apps.googleusercontent.com")

    @GetMapping
    fun getTokenInfo(@RequestHeader("Authorization") idToken:String): Response {
        val verifier = GoogleIdTokenVerifier.Builder(transport, jsonFactory)
            .setAudience(schedulerGoogleClientId)
            .build()
        val userToken = verifier.verify(idToken)

        return if(userToken != null) {
            Response.ok(userToken).build()
        } else {
            Response.status(Response.Status.UNAUTHORIZED).build()
        }
    }
}