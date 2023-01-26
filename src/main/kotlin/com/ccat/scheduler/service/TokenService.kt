package com.ccat.scheduler.service

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier
import com.google.api.client.http.javanet.NetHttpTransport
import com.google.api.client.json.gson.GsonFactory
import org.springframework.stereotype.Service

@Service
class TokenService {
    private val jsonFactory = GsonFactory.getDefaultInstance()
    private val transport = NetHttpTransport.Builder().build()
    private val schedulerGoogleClientId =
        setOf("330715887976-c5b9r5v68o73k1uqohddc4sgev8mu02j.apps.googleusercontent.com")

    fun verifyToken(idToken: String): GoogleIdToken? {
        val verifier = GoogleIdTokenVerifier.Builder(transport, jsonFactory)
            .setAudience(schedulerGoogleClientId)
            .build()
        return verifier.verify(idToken)
    }
}