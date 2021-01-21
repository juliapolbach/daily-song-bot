'use strict'
const assert = require('assert')
const wrapper = require('../bin/SpotifyAPIWrapper')

describe('Spotify API Wrapper', () => {
    it('Search by year returns response', async () => {
        const response = await wrapper.searchByYear()
        console.log(response)
        
        //assert.deepStrictEqual(await wrapper.searchByYear(), 'response!')
    })
})

