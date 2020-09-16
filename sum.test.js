'use strict'

import { expect } from 'chai'
import sum from './sum'

it('sum deve ser uma função', () => {
  expect(sum).to.be.a('function')
})