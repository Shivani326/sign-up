import React from 'react';
import Image from 'next/image';
// Mocked data for progress items
const cityEvents = [
  { id: 1, name: 'John', imageUrl: 'https://img.freepik.com/premium-photo/hand-holding-small-tree-planting-concept-green-world_34152-1480.jpg' },
  { id: 2, name: 'Alice' },

];

const Event = () => {
  return (
    <div className="bg-[#F6F9FD] text-black p-4 rounded-3xl row-span-2">
      <h1 className="text-3xl m-5">City Events</h1>

      <div className="bg-[#F6F9FD]  grid gap-4 py-4 h-100 text-white rounded-3xl">
        <div className="flex space-x-4">
          {cityEvents.slice(0, 4).map(event => (
            <div
              key={event.id}
              className="w-1/4 h-48 bg-[#FFFFFF] text-black flex justify-center rounded-3xl">
                <center><img
                src={event.imageUrl}
                alt={`City Event - ${event.name}`}
                className="max-w-full max-h-full mx-2 my-4 flex justify-center"
              /></center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;