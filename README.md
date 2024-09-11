ReachInbox -

One Box Overview
ReachInbox is a revolutionary AI-driven platform transforming cold outreach. It's an all-in-one solution for businesses to effortlessly find, enrich, and engage high-intent leads using multi-channel outreach across Twitter, LinkedIn, email, and phone. ReachInbox acts as your AI-powered growth team, continuously generating top-tier leads and enhancing large-scale cold email marketing campaign

This project, named "One Box", is a React.js application that shows emails and helps users reply to them. It includes features such as user authentication, email fetching, reply functionality,  and both light and dark modes.

DEMO VEDIO LINK

https://drive.google.com/file/d/1CNBBSFhO4nwYUg4ivqzJ0dT1Nwy3_brr/view?usp=drive_link

Features
User Authentication: Implemented login page using the provided design.
Email Viewing: Fetch and display emails in the OneBox screen after login.
API Integration:
GET /onebox/list
GET /onebox/:thread_id
DELETE /onebox/:thread_id

setup install dependencies

1. npm install
2. for tailwind css
3. npm install -D tailwindcss
   npx tailwindcss init
4. npm run start
5. Open http://localhost:3000 with your browser to see the result.

API USED

1.https://hiring.reachinbox.xyz/api/v1/onebox/list

2.https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id

3.https://hiring.reachinbox.xyz/api/v1/onebox/messages/:thread_id

4.https://hiring.reachinbox.xyz/api/v1/onebox/reset

5. https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https:localhost:3000/home

SNAPSHOT LOGIN PAGE

![login page](https://github.com/user-attachments/assets/cf1417b4-c3ae-44ab-94a7-58bbc96b3833)

DASHBOARD PAGE

![dashboard page](https://github.com/user-attachments/assets/b77dead7-dd09-4df7-86ab-32e7250379c4)

SNAP SHOT

![demo pic](https://github.com/user-attachments/assets/784647f2-b9c4-4582-a65b-e941684592c6)

LIGHT MODE AND DARK MODE

![light mode](https://github.com/user-attachments/assets/780a5cce-3cde-4972-ac7f-0112985de280)



