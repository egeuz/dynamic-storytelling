import React, { useState, useEffect } from 'react'
import axios from 'axios';

function SequenceMaker() {

  const [flips, setFlips] = useState("");

  const newFlip = async () => {
    const request = await axios.get('/new-flip');
    const flipArray = request.data;
    setFlips(flipArray);
  }

  const submitComic = async () => {
    const comic = await axios.post('/new-sequence', { sequence: flips });
    console.log(comic);
  }

  useEffect(() => {
    newFlip();
  }, []);

  return (
    <div id="comic-maker">
      {flips && flips.map((flip, index) => (flip === 1) ? <span key={index}>{index} </span> : "")}
      <button id="submit-comic" onClick={submitComic}>Done</button>
      <button id="get-new-flip" onClick={newFlip}>Flip Again</button>
    </div>
  )
}

export default SequenceMaker
