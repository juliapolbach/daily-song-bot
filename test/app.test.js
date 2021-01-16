'use strict'
const assert = require('assert');
const sinon = require('sinon');
const bot = require('../bin/bot')

describe('Tweet', ()=> {
    it('returns success message', () => {
        assert.deepStrictEqual(bot.tweet(), 'Message tweeted!')
    })
})