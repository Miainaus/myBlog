//jshint esversion:6
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");
var mongoose = require("mongoose");
dotenv.config();
const port = process.env.PORT || 3000;
mongoose.connect(process.env.DB_URL);

const homeStartingContent =
  "Are you ready to add your voice to the chorus of storytellers? Whether you're an aspiring writer or simply want to share a captivating experience, our platform is open for your contributions. Click our Compose button to become a part of our creative journey.";
const aboutContent =
  "Welcome to our virtual haven of thoughts, stories, and ideas - a place where words come to life and insights are shared. This blog is a vibrant tapestry of diverse perspectives and experiences, woven together by the threads of creativity and curiosity.   Whether you're a reader seeking inspiration, a writer eager to share your voice, or simply a curious soul in search of new perspectives, we invite you to embark on this journey with us.";
const contactContent =
  "We're thrilled that you've taken the time to explore our blog and connect with our community. Whether you have a question, feedback, or simply want to say hello, we're here to listen and engage. Feel free to reach out to us through the following channels:"
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
});
const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  Post.find()
    .then((result) => {
      console.log(result);
      res.render("home", {
        homeStartContent: homeStartingContent,
        posts: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const postTitle = req.body.titleBody;
  const postContent = req.body.postBody;
  const post = new Post({
    name: postTitle,
    content: postContent,
  });
  post.save();
  res.redirect("/");
});

app.get("/home/:namePost", (req, res) => {
  const requestTitle = _.lowerCase(req.params.namePost);
  Post.find()
    .then((result) => {
      result.forEach(function (currentValue) {
        let storedTitle = _.lowerCase(currentValue.name);
        let contentPost = currentValue.content;
        if (requestTitle === storedTitle) {
          res.render("post", { title: storedTitle, content: contentPost });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, function () {
  console.log("Server started on port 3000");
});
