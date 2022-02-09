'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const AWS = require('aws-sdk')

const app = express()
app.use(bodyParser.text({ type: 'text/plain' }))

AWS.config.update({ region: 'us-west-1' })
const s3 = new AWS.S3({ apiVersion: '2022-02-08' })

app.post('/upload', (req, res) => {
    const body = JSON.parse(`"${req.body}"`)
    var params = { Bucket: 'effie.alpha.avatar', ACL: 'public-read', Key: 'file/test2.txt', Body: new Buffer.from(body) }
    s3.upload(params, function (err, data) {
        console.log(err, data)
        res.json({ code: 200, data: req.body })
    })
})

module.exports = app