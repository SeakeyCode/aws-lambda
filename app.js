'use strict'
const express = require('express')
var AWS = require('aws-sdk');
const app = express()

// Set the Region 
AWS.config.update({ region: 'us-west-1' });

// Create S3 service object
var s3 = new AWS.S3({ apiVersion: '2022-02-08' })

// s3.listBuckets((err, data) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(data.Buckets)
//     }
// });

app.get('/', (req, res) => {
    res.json({ code: 200, data: [] })
})

module.exports = app