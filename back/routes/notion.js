var express = require('express');
const request = require('request');
var app = express.Router();

app.get('/', (req, res) => {
    res.send('/articles to retrieve all articles as JSON. /article/id to retrieve specific article as JSON')
})

app.get("/articles", (req, res) => {
    var url = 'https://api.notion.com/v1/blocks/'+ process.env.NOTION_PARENT_PAGE +'/children?page_size=100';
    var headers = { 
        'Authorization': process.env.NOTION_API_KEY
    };

    request.get({ url: url, headers: headers }, function (e, r, body) {
        res.status(200).send(body);
    });
  });

app.get("/article/:id", (req, res) => {
    var url = 'https://api.notion.com/v1/blocks/'+ req.params.id +'/children?page_size=100';
    var headers = { 
        'Authorization': process.env.NOTION_API_KEY
    };

    request.get({ url: url, headers: headers }, function (e, r, body) {
        res.status(200).send(body);
    });
});

module.exports = app