import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Details from './Details';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Home = () => {
  const [view, setView] = useState('dashboard');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    if (token) {
      console.log('Token:', token);
      localStorage.setItem('token', token);
    } else {

      // For example, you could set a state to show an error or redirect
    }
  }, []);

  const handleNavigation = (view) => {
    setView(view);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onNavigate={handleNavigation} />
      <div className="flex-1 flex flex-col">
        {view === 'dashboard' && <Dashboard />}
        {view === 'details' && <Details />}
        {/* Add more conditional renders for other views */}
      </div>
    </div>
  );
};

export default Home;





// import React, { useEffect, useState } from 'react';
// import Dashboard from './Dashboard';
// import Details from './Details';

// const Home = () => {
//   const [view, setView] = useState('dashboard');

//   useEffect(() => {
//     const queryParams = new URLSearchParams(window.location.search);
//     const token = queryParams.get('token');

//     if (token) {
//       console.log('Token:', token); 
//       localStorage.setItem('token', token);
//     } else {
      
//       navigate('/login');
//     }
//   }, [navigate]);

//   const handleNavigation = (view) => {
//     setView(view);
//   };

//   return (
//     <>
//     {/* <Dashboard/> */}

//     <div>
//       <Sidebar onNavigate={handleNavigation} />
//       {view === 'dashboard' && <Dashboard />}
//       {view === 'details' && <Details />}

//     </div>

    
//     </>
//   );
// };

// export default Home;




     {/* <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Onebox</h1>
          <div className="ml-4 flex items-center">
        
        
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-1.59-1.59m0 0L21 21m-4.24-4.24l-1.59-1.59"
              />
            </svg>
          </span>
          <span>Tim's Workspace</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="bg-gray-700 p-4 flex flex-col w-64">
          <ul className="flex flex-col">
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-18 0 9 9 0 0018 0z"
                  />
                </svg>
                <span>People</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m7 8h-10M7 16h10m-3-1v1m-1-1v1m1-1v1m1-1v1m1-1v1m1-1v1m-2 2l-2-2m0 0l-5-5m0 0l-1-1m1 1l2 2m2 2l5 5m0 0l1 1m-1-1l-2-2m-2-2l-5-5m0 0l-1-1"
                  />
                </svg>
                <span>Mail</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>List</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H9a9 9 0 01-9-9V6a9 9 0 019 9h6zm6 1a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Notifications</span>
                <span className="ml-auto text-xs font-bold text-red-500">
                  12
                </span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 9c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0-9c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                  />
                </svg>
                <span>Analytics</span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="flex items-center">
                <span className="ml-auto text-sm font-bold text-green-500">
                  AS
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 bg-black p-4">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-gray-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a1 1 0 10-2 0v2a1 1 0 002 0v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src="https://via.placeholder.com/20"
                  alt="Avatar"
                  className="rounded-full w-6 h-6"
                />
              </div>
              <div className="absolute top-6 right-6">
                <span className="text-sm font-bold text-red-500">Y</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-8">
              It's the beginning of a legenda Y 4 ipeline
            </h2>
            <p className="text-sm mt-2">
              When you have inbound E-mails you'll see them here
            </p>
          </div>
        </div>
      </div>
    </div> */}


