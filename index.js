/** EXPRESS & OTHER SETUP **/
require('dotenv').config();
const express = require('express');
const app = express();

/** MIDDLEWARE **/
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

/** CONNECT TO DATABASE **/
const mongoose = require('mongoose');
const Sequence = require('./models/sequences');
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log("connected to server")
  })
  .catch(err => {
    console.log(err);
  });

/** COIN FLIP **/
const flip = require('./flip');
const COLS = 5;
const ROWS = 5;

/** ROUTES **/
app.get('/new-flip', (req, res) => {
  const flips = flip(COLS * ROWS);
  res.json(flips);
});

app.post('/new-sequence', (req, res) => {
  const newSequence = new Sequence({
    sequence: req.body.sequence
  });

  newSequence.save().then(savedSequence => {
    res.json(savedSequence);
  });
});

app.get('/all-sequences', (req, res) => {
  Sequence.find({})
    .then(sequences => {
      res.json(sequences)
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log("cooking things up on port " + process.env.PORT);
})