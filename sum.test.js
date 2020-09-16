'use strict'

const expect = require('chai').expect
const sum = require('./sum')

it('sum deve ser uma função', () => {
  expect(sum).to.be.a('function')
})