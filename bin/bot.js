'use strict'
require('dotenv').config()
const twit =  require('twit')

const config = {
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCES_TOKEN_SECRET,
}

const Twit = new twit(config)

async function tweet() {
    try {
        return await Twit.post('statuses/update', { status: 'hello world!' })
    } catch (err) {
        //TODO
        console.log('Error:', err.message)
    }
}

//tweet()

module.exports = {tweet, Twit}