import React from 'react';
import ProgressInfo from './ProgressCard';
import Challenge from './ActiveChallenges';
import Event from './CityEvents';

const Main = () => {
  return (
    <div className="bg-[#F6F9FD] grid gap-4 text-white p-4 h-full rounded-3xl">
        <ProgressInfo/>
        <div className="row-span-4 grid gap-4">
            <Challenge/>
            <Event/>
        </div>
    </div>
  );
};

export default Main;