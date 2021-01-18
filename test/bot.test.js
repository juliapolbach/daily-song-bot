'use strict'
const assert = require('assert');
const sinon = require('sinon');
const {Twit, tweet} = require('../bin/bot')

describe('Tweet', ()=> {
    it('returns success message', async () => {
        const stub = sinon.stub(Twit, 'post')
        stub.resolves('Message tweeted')
        const response = await tweet()
        assert.deepStrictEqual(response, 'Message tweeted!')
        stub.restore()
    })
})