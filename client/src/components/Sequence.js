import React from 'react';
import Frame from './Frame';
import DragFrame from './DragFrame';

function Sequence({ sequence, moveFrame, readOnly }) {

  return (
    <div className="sequence">
      {
        readOnly ?
          sequence.map((frame) => <Frame key={frame} content={frame} />)
          :
          sequence.map((frame, index) => <DragFrame content={frame} index={index} key={frame} moveFrame={moveFrame} />)
      }
    </div>
  )
}


export default Sequence
