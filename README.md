This is a simple Node.js project where you can choose model of vehicle and model year. Then you can check what models was made buy that year.

To implement this, a javascript component was used, and tailwind was used for styling. Work with the back-end is performed in a separate api file using asynchronous functions that make a fetch request to the server.

home.js is main page where you can see form with two dropdown selectors and button. 
After filling out the form and clicking the button, you will be taken to the component ModelList.js with unique link and with the models of the vehicle.

I would also like to point out the items that have not been fulfilled. I did not understand what was meant by the first point number 3 and the first point number 6. I searched the Internet to find out what it might mean, but due to lack of experience and time, I was not able to fulfill these points. 



├── app
│   ├──api
│       └── api.js                          # api component
│   ├──pages
│   │   ├── [result]
│   │   │      ├── [makeId]
│   │   │      │    ├── [year]
│   │                     └── page.js       # Results page component
│   ├── home.js
│   ├── components
│         ├── ModelsList
│         │       └── ModelsList.js         # Component for displaying models
│         └──Main   
│              └── Main.js                  # wrapper for home component 
├── public                                  # Public resources
└── README.md                               # Project documentation



## Getting Started
1. Clone the repository

    git clone https://github.com/UUUIiiii/the-Car-Dealer-App

2. go to the created folder

    cd your-project

2. Install dependencies 

    npm install

3. Now you can run the application 

    npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


