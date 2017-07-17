//Note to Team from JM: This is populated for convenience of referece only -- Need to conform to apropriate model for the final project.

const express = require("express");
const Article = require("../models/______");//add ,model
const Article = require("../models/______");
const Article = require("../models/______")

let router = express.Router();

router.get("/gethistory",function(req,res) {
  Article.gethistory()
  .then(function(results){
    res.status(200)
    .send(results);
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});

router.post("/savearticle",function(req,res) {
  let title = req.body.title;
  let snippet = req.body.snippet;
  let date = req.body.date;
  let url = req.body.url;
  let articleId = req.body.articleId;
  console.log(req.body);

  Article.addArticle({title: title, synopsis:snippet, date: date, url:url, articleId:articleId})
  .then(function(){
    res.status(200)
    .send("OK");
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});

router.post("/removearticle",function(req,res) {
  let articleId = req.body.articleId;

  Article.removeArticle({articleId:articleId})
  .then(function(){
    res.status(200)
    .send("OK");
  })
  .catch(function(error){
    res.status(500)
    .send(error)
  });
});

router.get("/getkey",function(req,res) {
  res.status(200)
  // .send(process.env.NYT);
  .send("746af9a2fde74e209e90ecaa5005b7a9");
});














module.exports = router;
