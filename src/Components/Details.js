import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { GET_EMAILS_API, GET_MESSAGE_API } from './GlobalApi';

const Details = () => {

  const [emails, setEmails] = useState([]);

  // for specific email clicked
  const [selectedThreadId, setSelectedThreadId] = useState(null); 
  const [messages, setMessages] = useState([]);  


  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      fetch(GET_EMAILS_API, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      })
        .then(response => response.json())
        .then(data => setEmails(data.data)) // Updata the state with data
        .catch(error => console.error('Error fetching emails:', error));
    }
  }, []);

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  // for thread id
  const handleEmailClick = (threadId) => {
    const token = localStorage.getItem('token');
    
    if (token) {
      fetch(GET_MESSAGE_API.replace(':thread_id', threadId), { // Fetch messages for the selected thread
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
        },
      })
        .then(response => response.json())
        .then(data => {
          setMessages(data.data); 
          setSelectedThreadId(threadId);
        })
        .catch(error => console.error('Error fetching messages:', error));
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
       <Topbar/>
        <div className="flex-1 flex">
  
          <div className="w-1/5 bg-black text-white p-4 border-x-2  border-r-slate-700">
            <h2 className="text-xl font-bold mb-3 text-blue-600">All Inbox(s)</h2>
            
            <p className="mb-5">2/2 inboxes selected</p>

            <input className="h-8 w-full rounded-md bg-slate-600 font-semibold p-4" placeholder="Search"/>
             
             <div className="flex items-center space-x-2 pt-5 w-full ">
           <span class="rounded-xl bg-slate-700 px-2 py-1 text-xs font-semibold text-blue-500">2</span><p className="font-semibold">New Replies</p>
            </div>

            
            {/* list email */}
            {emails.length > 0 ? (
            <ul className="marker:text-sky-500 list-disc pl-4 space-y-">
           
              {emails.map(email => (
                <li key={email.id} className="p-4 rounded-lg cursor-pointer "  onClick={() => handleEmailClick(email.threadId)}>
                  <div className="flex justify-between border-b-2 border-slate-700">
                    <div className='mb-3'>
                      <p className="font-bold">{email.fromName} ({email.fromEmail})</p>
                      <p className="text-sm text-gray-600">{email.subject}</p>

                      <div class="flex items-center space-x-2 text-base pt-4 pb-3">
                <span class="rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-green-600">Interested</span>
                <span class="rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">Campaign Name</span>
                    </div>

                    </div>
                    <p className="text-sm text-gray-500">{formatDate(email.sentAt)}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No emails available</p>
          )}

          </div>
          
          {/* Email Details */}
          <div className="flex-1 p-4 bg-black">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">New Product Launch</h3>
              <p><strong>From:</strong> jeanne@icloud.com</p>
              <p><strong>To:</strong> lennon.j@mail.com</p>
              <p className="mt-4">I would like to introduce you to SaaSgrow...</p>
            </div>
          </div>
          
          {/* Campaign Details */}
          <div className="w-1/4 bg-gray-200 p-4">
            <h4 className="font-bold">Lead Details</h4>
            <ul className="space-y-2 mt-2">
              <li><strong>Email ID:</strong> orlando@gmail.com</li>
              <li><strong>Company:</strong> Reachinbox</li>
              {/* More lead details */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
