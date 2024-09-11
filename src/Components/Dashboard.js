import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Inbox from '../Image/inbox.png'

const Dashboard = () => {
  return (

      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 flex justify-center items-center bg-gray-100">
          <div className="text-center">
            <img src={Inbox} alt="email icon" className="mx-auto w-52 h-52 mb-10" />
            <h2 className="text-2xl font-bold">It's the beginning of a legendary pipeline</h2>
            <p className="mt-4 text-gray-600">When you have inbound E-mails, you’ll see them here</p>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
