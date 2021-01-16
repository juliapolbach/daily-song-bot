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

function tweet() {
    Twit.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
        console.log(data)
        if (err) {
            console.log(err.stack);
         } else {
            return 'Message tweeted!'
         }
      })

}

//tweet()

module.exports = {tweet}