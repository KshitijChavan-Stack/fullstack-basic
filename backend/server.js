import express from "express";
// module JS-> works async
// we have to tell in package.json thwt how we
// have to assib;e the files -> type:module

const app = express();
// .use()-> serves as a middleware and we here are
// serving the static file
// app.use(express.static("dist"));
const Port = process.env.PORT || 4000;
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// demo data
const jokes = [
  {
    id: 1,
    question: "Why did the JavaScript developer go broke?",
    answer: "Because he kept using var instead of let!",
  },
  {
    id: 2,
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs!",
  },
  {
    id: 3,
    question: "What did the JavaScript array say to the object?",
    answer: "You’ve got some serious keys, bro!",
  },
  {
    id: 4,
    question: "Why was the function so happy?",
    answer: "Because it knew it could always return something!",
  },
  {
    id: 5,
    question: "How do you comfort a JavaScript bug?",
    answer: "You console it!",
  },
];

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
}); // this will give us the array with objects
// recomended is when we hit on the endpoint copy it
// and go to json formattor to see a better formated version
// for better understanding !(sepcific we can see that strutucture in tree way)

app.listen(Port, () => {
  console.log(`Server running on ${Port}`);
});
