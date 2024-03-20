const express = require('express');
const app = express();
const movies = [
  {
    id: "1",
    name: "avengers 1",
    rating: "5.4"
  },
  {
    id: "2",
    name: "avengers 2",
    rating: "5.4"
  },
  {
    id: "3",
    name: "avengers 3",
    rating: "5.4"
  }
];
app.use(express.json())

app.get("/", (req, res) => {
  console.log({ headers: req.headers });
  res.json(movies)
})

app.listen(8002, () => {
  console.log("server listening on port ", 8002)
})