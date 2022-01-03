let expect = require('expect')
const { describe } = require('mocha')
const {generateMessage} = require('../utils/message')

describe('GenerateMessage',()=>{
    it("should generate correct message object", () => {
        let from="sriram",text="core message",message = generateMessage(from, text)
        expect(typeof message.createdAt).toBe('string')
        expect(message).toMatchObject({from,text})

    })
})