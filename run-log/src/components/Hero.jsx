// 9/3/24 notes: need to make it so that when viewport shrinks, icons stay in relative position
// also need to make it so that when i drag it doesn't open up the folder (a check to see if the position has moved after user clicked)

import React from 'react'
import { folder } from '../assets'
import { useState, useRef, useEffect } from 'react';
import About from './About';
import RunLog from './RunLog';

const initialPositions = [
  { id: 1, name: 'about', src: folder, link: './About', top: 100, left: 100 },
  { id: 2, name: 'strava', src: folder, link: 'https://www.strava.com/athletes/133489503', top: 200, left: 200 },
  { id: 3, name: 'run log', src: folder, link: './RunLog', top: 300, left: 300 },
];

const Hero = () => {
  const [positions, setPositions] = useState(initialPositions);
  const [showAbout, setShowAbout] = useState(false); // State to manage the pop-up
  const [showRunLog, setShowRunLog] = useState(false);

  const [draggingId, setDraggingId] = useState(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleIconClick = (id) => {
    if (id === 1) {
      setShowAbout(true); // Show the About pop-up
    } 
    if (id === 2) {
      const clickedItem = positions.find((pos) => pos.id === id);
      window.open(clickedItem.link, '_blank');
    }
    if (id === 3) {
      setShowRunLog(true);
    }
  };
  
  const handleMouseDown = (id, event) => {
    event.preventDefault(); // Prevent default behavior to avoid text selection
    setDraggingId(id);
    dragStartPos.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseMove = (event) => {
    if (draggingId !== null) {
      const dx = event.clientX - dragStartPos.current.x;
      const dy = event.clientY - dragStartPos.current.y;
      
      setPositions(prevPositions =>
        prevPositions.map(position =>
          position.id === draggingId
            ? {
                ...position,
                top: position.top + dy,
                left: position.left + dx
              }
            : position
        )
      );
      
      dragStartPos.current = { x: event.clientX, y: event.clientY };
    }
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (event) => {
      if (draggingId !== null) {
        handleMouseMove(event);
      }
    };

    const handleGlobalMouseUp = () => {
      if (draggingId !== null) {
        handleMouseUp();
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [draggingId]);

  return (
    <section className="relative w-full" ref={containerRef}>
      {positions.map(position => (
        <div
          key={position.id}
          className='absolute cursor-move flex flex-col items-center'
          style={{ 
            top: `${position.top}px`, 
            left: `${position.left}px`,
            transition: draggingId === position.id ? 'none' : 'all 0.3s ease'
          }}
          onMouseDown={(event) => handleMouseDown(position.id, event)}
          onClick={() => handleIconClick(position.id)}
        >
          <div className="flex flex-col justify-center items-center h-auto w-[110px]">
            <img
              src={position.src}
              alt={position.name}
              className="pointer-events-none"
            />
            <p className='font-dmMono text-lightgrey text-center'>
              {position.name}
            </p>
          </div>
        </div>
      ))}
      {showAbout && <About closePopup={() => setShowAbout(false)} />}
      {showRunLog && <RunLog closePopup={() => setShowRunLog(false)} />}
    </section>
  );
}

export default Hero;