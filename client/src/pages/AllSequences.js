import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllSequences() {

  const [sequences, setSequences] = useState("");

  const getAlLSequences = async () => {
    const request = await axios.get('/all-sequences');
    const sequences = request.data;
    setSequences(sequences);
  }

  useEffect(() => {
    getAlLSequences();
  }, []);

  return (
    <div>
      {
        sequences &&
        sequences.map((sequence, index) => {
          return <p key={index}>{sequence.sequence.join(" ")} <br/></p>
        })
      }
    </div>
  )
}

export default AllSequences
