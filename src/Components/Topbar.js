import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-gray-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold">Onebox</div>
      <div className="flex space-x-4">
        {/* Profile Icons */}
        <div className="rounded-full w-8 h-8 bg-yellow-500 flex items-center justify-center">A</div>
    
      </div>
    </div>
  );
};

export default Topbar;
