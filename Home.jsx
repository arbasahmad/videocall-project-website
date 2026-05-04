import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [room, setRoom] = useState("");

  function handleJoin() {
    if (!room) return;
    navigate(`/room/${room}`);
  }

  return (
    <div id="home">
      <input
        type="text"
        placeholder="Enter room ID"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />

      <button onClick={handleJoin}>
        Join Room
      </button>
    </div>
  );
}

export default Home;