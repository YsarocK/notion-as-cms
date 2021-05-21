var express = require('express');
var app = express.Router();
const request = require('request');

app.get("/", (req, res) => {
    const code = urlParams.query.code;
    if(code != null){
        var data = JSON.stringify({
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": "https://etiennemoureton.fr"
        });

        var url = 'https://api.notion.com/v1/oauth/token';
        var headers = { 
            'Authorization': 'Basic OTlmODk2YTgtZWQ5ZC00MmE2LTk1OTQtMjI5YmJlZjcwMmZiOnNlY3JldF9ISW9kSVd1ZE1NREZKNVJ1c09rNjhjcW9IUlBZZ2gwcHJsR2tsUDFVdzk=', 
            'Content-Type': 'application/json'
        };
    
        request.post({ url: url, headers: headers, body:body }, function (e, r, body) {
            res.status(200).send(body);
        });
    };
});

module.exports = app