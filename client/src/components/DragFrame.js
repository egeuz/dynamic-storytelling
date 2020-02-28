import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';

const type = "DragFrame"; // Need to pass which type element can be draggable

function DragFrame({ content, index, moveFrame }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return; //don't replace items with themselves
      moveFrame(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type, id: content, index },
    collect: monitor => ({ isDragging: monitor.isDragging() })
  })

  drag(drop(ref));

  return (
    <div className="frame" ref={ref} style={{opacity: isDragging ? 0 : 1}}>
      <div className="frame-content">{content}</div>
    </div>
  )
}

export default DragFrame
