import React from 'react';

const RESET_API = 'https://hiring.reachinbox.xyz/api/v1/onebox/reset';

const ResetButton = ({ onReset }) => {
  const handleReset = () => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(RESET_API, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,

        },
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 200) {
            // Reset successful, call the onReset callback to update the parent component
            console.log('Reset successful:', data.message);
            onReset(); // Trigger the parent's reset logic
          } else {
            console.error('Error resetting:', data.message);
          }
        })
        .catch(error => console.error('Error performing reset:', error));
    }
  };

  return (
    <button
      onClick={handleReset}
      className="px-3 py-1 bg-slate-800 text-white rounded-md "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
    
    </button>
  );
};

export default ResetButton;