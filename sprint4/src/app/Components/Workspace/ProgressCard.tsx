import React from 'react';
import Image from 'next/image';

const Progress = () => {
  // Mocked data for progress items
  const progressItems = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Eve' },
    { id: 5, name: 'Michael' },
  ];
  return (
    <div className="bg-[#F6F9FD] text-black p-4 rounded-3xl">
      <Image
      src="/logo.webp"
      alt="Logo"
      width={600}     
      height={300}     
    />

      <div className="bg-[#F6F9FD] grid gap-4 py-4 h-100em text-white rounded-3xl">
      <div className="flex space-x-4">
        {progressItems.slice(0, 5).map(item => (
          <div
            key={item.id}
            className="w-1/5 h-48 bg-[#FFFFFF] text-black flex justify-center rounded-3xl">
            {item.name}
          </div>
        ))}
    </div>
      </div>

    </div>
  );
};

export default Progress;