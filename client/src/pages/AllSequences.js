import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Sequence from '../components/Sequence';


function AllSequences() {

  const [sequences, setSequences] = useState("");

  const getAllSequences = async () => {
    const request = await axios.get('/all-sequences');
    const sequences = request.data;
    setSequences(sequences);
  }

  useEffect(() => {
    getAllSequences();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="all-sequences">
        {
          sequences &&
          sequences.map(sequence => {
            return <Sequence key={sequence._id} sequence={sequence.sequence} readOnly={true} />
          })
        }
      </div>
    </DndProvider>
  )
}

export default AllSequences
