'use strict'
global.fetch = require('node-fetch')
require('dotenv').config()

let token = null

async function requestToken() {
    const clientIdAndSecret = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    const base64 = Buffer.from(clientIdAndSecret).toString('base64')

    const data = {
        method: 'post',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${base64}`,
        },
        body: 'grant_type=client_credentials'
    }
    let response = await fetch('https://accounts.spotify.com/api/token', data)
    token = response.json()
    return token
}

async function searchByYear() {
    const access_token = token ? token.access_token : (await requestToken()).access_token
    const apiUrl = 'https://api.spotify.com/v1/search?type=album&q=year:2021'
    const data = {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    }
    const response = await fetch(apiUrl, data)
    return response.json()
}

module.exports = { searchByYear }