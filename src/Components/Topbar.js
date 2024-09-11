import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Topbar = () => {
  return (
    <div className="bg-gray-600 p-4 flex justify-between items-center dark:bg-white">
      <div className="text-white font-bold dark:text-black">Onebox</div>

       <div className='flex justify-between gap-36'>
      <DarkModeToggle className="f"/>
      <div className="flex space-x-4">
        {/* Profile Icons */}
        <div className="rounded-full w-8 h-8 bg-yellow-500 flex items-center justify-center">A</div>
      </div>
      </div>

    </div>
  );
};

export default Topbar;
