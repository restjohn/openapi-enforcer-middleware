/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict'
const bodyParser = require('body-parser')
const express = require('express')
const Enforcer = require('../')
const path = require('path')

const app = express()

app.use(bodyParser.json())

const enforcer = Enforcer(path.resolve(__dirname, 'openapi-v2.yaml'), {
  mockControllers: __dirname + '/mock-controllers',
  mockFallback: true
})
app.use(enforcer)

const listener = app.listen(8080, err => {
  if (err) return console.error(err.stack)
  console.log('Server listening on port ' + listener.address().port)
})