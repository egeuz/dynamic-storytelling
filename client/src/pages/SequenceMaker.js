import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';

/* COMPONENTS */
import Sequence from '../components/Sequence';

function SequenceMaker({ loadSequence }) {
  const initialSequence = loadSequence ? loadSequence : "";
  const [sequence, setSequence] = useState(initialSequence);

  const generateSequence = async () => {
    const request = await axios.get('/generate-sequence');
    const sequence = request.data;
    setSequence(sequence);
  }

  const submitSequence = async () => {
    const submission = await axios.post('/new-sequence', { sequence: sequence });
    console.log(submission);
  }

  const moveFrame = (dragIndex, hoverIndex) => {
    const draggedFrame = sequence[dragIndex];
    setSequence(
      update(sequence, {
        $splice: [[dragIndex, 1], [hoverIndex, 0, draggedFrame]]
      })
    );
  }

  useEffect(() => {
    generateSequence();
  }, []);

  return (
    <div id="sequence-maker">
      {
        sequence &&
        <DndProvider backend={HTML5Backend}>
          <Sequence sequence={sequence} moveFrame={moveFrame} readOnly={false} />
        </DndProvider>
      }
      <div id="controls">
        <button onClick={submitSequence}>Done</button>
        <button onClick={generateSequence}>New Sequence</button>
      </div>

    </div>
  )
}

export default SequenceMaker
