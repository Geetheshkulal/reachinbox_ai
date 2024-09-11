import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { GET_EMAILS_API, GET_MESSAGE_API } from './GlobalApi';
import DeleteEmail from './DeleteEmail';
import ResetButton from './ResetButton';

const Details = () => {

  const [emails, setEmails] = useState([]);

  // for specific email clicked
  const [selectedThreadId, setSelectedThreadId] = useState(null); // For specific email clicked
  const [messages, setMessages] = useState([]);  // For messages from the selected thread
  const [loading, setLoading] = useState(false); 

  const token = localStorage.getItem('token');

  useEffect(() => {


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
  }, [token]);

  // reset button
  const handleReset = () => {
    setEmails([]);
    setMessages([]);
    setSelectedThreadId(null);
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  // for thread id
  const handleEmailClick = (threadId) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    
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
          setLoading(false);
        })
        .catch(error => console.error('Error fetching messages:', error));
        setLoading(false);
    }
  };


  return (
    <>
    <div className="flex h-screen ">
      <div className="flex-1 flex flex-col">
       <Topbar/>
        <div className="flex-1 flex">
  
          <div className="w-1/5  bg-black text-white p-4 border-x-2  border-r-slate-700 dark:bg-slate-100 dark:text-black ">

            <div className='flex  justify-between'>
            <h2 className="text-xl font-bold mb-3 text-blue-600">All Inbox(s)</h2>
              {/* ResetButton  */}
              <div className="mb-5">
              <ResetButton onReset={handleReset} />
            </div>
            </div>

            <p className="mb-5 font-semibold">2/2 inboxes selected</p>

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

                      <div class="flex items-center justify-between space-x-2 text-base pt-4 pb-3">
                <span class="rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-green-600">Interested</span>
                <span class="rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">Campaign Name</span>
                <DeleteEmail
                      threadId={email.threadId}
                      token={token}
                      setEmails={setEmails}
                      emails={emails}
                      setMessages={setMessages}
                      setSelectedThreadId={setSelectedThreadId}
                    />
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
          <div className="flex-1 flex flex-col p-4 bg-black dark:bg-slate-100">

            <div className="bg-slate-800 shadow-md p-4 rounded-lg dark:bg-slate-100">
              <h3 className="text-xl text-white font-bold mb-2 dark:text-black" >New Product Launch</h3>
              <p className='text-white dark:text-black'><strong>From:</strong> jeanne@icloud.com</p>
              <p className='text-white  dark:text-black'><strong>To:</strong> lennon.j@mail.com</p>
              <p className='text-white mt-7  dark:text-black'>Hi FIRST_NAME,</p>
              <p className="mt-4 text-white  dark:text-black">I would like to introduce you to SaaSgrow, a productized design service specifically tailored to saas startups Our aim is to enchance the user experience and boost the visual appeal of your products</p>
            </div>


            <div className="bg-black pt-5 dark:bg-slate-100" >
            {loading ? (
              <p className='text-xl text-white dark:text-black'>Loading message details...</p> 
            ) : selectedThreadId ? (
              <div>
                <h2 className="text-xl text-white font-bold mb-3 dark:text-black">Message Details</h2>
                {messages.length > 0 ? (
                  messages.map((message, index) => (
                    <div key={index} className="p-4 rounded-lg mb-4 mt-7 bg-slate-800 shadow-md dark:bg-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-bold text-white dark:text-black">{message.fromName} ({message.fromEmail})</p>
                          <p className="text-sm text-white  dark:text-black">{message.subject}</p>
                        </div>
                        <p className="text-sm text-white  dark:text-black">{new Date(message.sentAt).toLocaleString()}</p>
                      </div>
                      <p className="text-white  dark:text-black">{message.body}</p>
                    </div>
                  ))
                ) : (
                  <p>No message details available for this email.</p>
                )}
              </div>
            ) : (
              <p className='text-xl text-white font-semibold  dark:text-black'>Select an email to view its details ..</p> // Prompt the user to select an email
            )}

          </div>

          <div className="flex pt-5">
        <button className="bg-gradient-to-r from-slate-200 to-blue-500 text-black px-4 py-2 rounded w-18"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
</button>
      </div>

          </div>

         

          {/* Campaign Details */}
          <div className="w-1/5 bg-black border border-l-1 border-slate-600 p-4 dark:bg-slate-100 dark:border-slate-100">
  <h4 className="font-bold text-white bg-slate-800 p-2 rounded-xl dark:text-black dark:bg-slate-300">Lead Details</h4>
  <ul className="mt-7 space-y-4">
    <li className="flex justify-between text-white dark:text-black">
      <span>Name</span>
      <span>Orlando</span>
    </li>
    <li className="flex justify-between text-white  dark:text-black">
      <span>Contact No</span>
      <span>+54-908775774</span>
    </li>
    <li className="flex justify-between text-white  dark:text-black">
      <span>Email ID</span>
      <span>orlando@gmail.com</span>
    </li>
    <li className="flex justify-between text-white  dark:text-black">
      <span>LinkedIn</span>
      <span>linkedin.com/in</span>
    </li>
    <li className="flex justify-between text-white  dark:text-black">
      <span>Company Name</span>
      <span>Reachinbox</span>
    </li>
  </ul>

  <div className="  border-slate-600 pt-9">
  <h4 className="font-bold text-white bg-slate-800 p-2 rounded-xl  dark:text-black dark:bg-slate-300">Activities</h4>
  </div>
</div>

          
        </div>
      </div>
    
    </div>

 
    </>

    
  );
};

export default Details;
