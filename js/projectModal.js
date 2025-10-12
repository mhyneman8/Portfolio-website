const content = {
	meet: {
		id: 'meet',
		title: 'Meet App',
		overview:
			'The Meet App is a progressive web application (PWA) that allows users to find coding events in a city near them. They can search a city, specify the number of events they want to see, and view more details about a chosen event.',
		carouselImages: [
			'../img/meet/main.jpg',
			'../img/meet/eventCard.jpg',
			'../img/meet/meetDemo.gif',
		],
		img: [
			'../img/meet/search.gif',
			'../img/meet/eventsNumber.gif',
			'../img/meet/details.gif',
			'../img/meet/graph.gif',
		],
		purpose:
			'Meet app was part of the CareerFoundry curriculum to show my ability with React, TDD, and PWA. It is built from these user stories.',
		userStories: [
			"As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in.",
			'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
		],
		objective:
			'To build a serverless PWA with React using a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events.',
		approach: [
			'Used Gherkin style to write scenarios for the user stories',
			'Created the React app using create-react-app',
			'Created getAccessToken, getAuthURL, and getCalendarEvents functions using the Serverless Toolkit',
			'Created test files for each component. Wrote tests for each feature. Then coded the functionality required to get those tests to pass',
			'Created integration tests to make sure the components were working together',
			'Created getEvents function to save events and locations to the state',
			'Created the NumberOfEvents, CitySearch, EventList components that would update the updateEvents function in App.js (main file)',
			'Created the show/hide feature for the event details and specify number of events following Behavior Driven Development (BDD)',
			'Installed Atatus to monitor app performance',
			"Set up alerts using Object-Oriented Programming. Alerts appear if users enter incorrect search terms, or their number of events don't fit in the parameters set.",
			'Converted the app to a Progressive Web App, which allows some offline capabilites and alerts when user is offline',
			'Added visual representations of meet events',
		],
		tech: 'JavaSript, HTML, CSS, Gherkin, React, TDD',
		duration: 'This project took about two months to complete',
		challenges: [
			"This was my first foray into test driven development. It took me a little time to get the structure of TDD down. Once I was able to do that, writing the tests flowed more freely. The other challenge I had was that a feature stopped working early in the development, and I didn't notice until I was about finished. I had to revert changes on GitHub until I could go back to the version that was working. I redid the corrupted change, then added the GitHub changes back one at a time to make sure all features were working. When I work on this project again, I would like to make a guest login, so users won't have to sign-in with Google.",
		],
		credits: [
			'Lead Developer',
			'Tutor: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/meet',
	},
	cv: {
		id: 'cv',
		title: 'Clearviction',
		overview:
			'Clearviction is a civic-tech open-source project working to make the conviction vacation process, in Washinton, easier and more straightforward, starting with an eligibility calculator.',
		carouselImages: [
			'../img/clearviction/cvhome.jpg',
			'../img/clearviction/whyvacate.jpg',
			'../img/clearviction/contact-page.jpg',
		],
		img: [
			'../img/clearviction/cv-demo.gif',
			'../img/clearviction/aboutcode.jpg',
			'../img/clearviction/aboutheader.jpg',
			'../img/clearviction/filestructure.jpg',
		],
		purpose:
			'For this project, I worked as part of the Development team to implement a redesign and fix bugs before launch. I also lead a team to test the website accessibility using WCAG Standards. As a team, we increased the accessibility rating from 81% to 96%.',
		userStories: ['', ''],
		objective:
			'To build a website and calculator, using React, to help Washingtonians vacate their convictions. This project gave me real-world experience working as part of an Agile development environment.',
		approach: [''],
		tech: 'React, Material UI, Typescript, Javascript, AWS',
		duration:
			'This is an ongoing project. I was a part of this project from January 2021 - February 2024.',
		challenges: [
			'I enjoyed being a part of a large team and working on this project. Being a part of a team also leads to some challenges. The team was spread out across the world, so most of our work was asynchronous. This meant we had to communicate clearly and be flexible about working on particular pieces of the site together.',
			'Another challenge was to jump into a project that already had a staging website launched. I had to be able to look through code written by other developers to see what to change or what to fix. Sometimes that leads to a longer time needed to make changes. I had to follow the files to each piece I needed to change.',
		],
		credits: ['Sr. Developer'],
	},
	angular: {
		id: 'angular',
		title: 'myFlix Angular',
		overview:
			"MyFlix is a single-page, responsive movie app that allows movie enthusiasts to access information about different movies, directors, and genres whenever they want. It's built with Angular, with routing and several interface views.",
		carouselImages: [
			'../img/angular/angular.jpg',
			'../img/angular/director.jpg',
			'../img/angular/profile.jpg',
		],
		img: [
			'../img/angular/angularDemoCrop.gif',
			'../img/angular/trello.jpg',
			'../img/angular/director.jpg',
			'../img/angular/profile.jpg',
		],
		purpose:
			'This application was built in accordance with the CareerFoundry curriculum to learn and practice the Angular framework. This will support the existing server-side built earlier (Movie API) by facilitating user requests and rendering the response from the server-side via a number of different interface views. This app demonstrates my Angular skills and my ability to create straightforward documentation for other developers and team members.',
		userStories: [
			"As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in.",
			'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
		],
		objective: 'To build a client-side for the movie API using Angular.',
		approach: [
			'Plan out the project using a Kanban board. Kept track of what needed to be done, was in progress, and what was completed',
			'Installed Angular CLI and created a new Angular app using the angular cli',
			'Generate service file to implement logic for making API calls',
			'Used Angular Material to create the user registration and login inside a dialog box',
			'Created a welcome screen so users can either login or register before seeing the movies list',
			'Created movie card',
			'Created user profile component that allows user to view and edit their data',
			"Used Angular's router to implement a route for the welcome, movie card, and user views.",
			"Added links to the movie card to get more information on genre, director, movie details, and a button to add a movie to user's favorites",
			'Make app responsive using Angular Material',
			'Hosted on GitHub Pages',
		],
		tech: 'Node, Angular, Angular Material, Compodoc',
		duration:
			'This project took about a month to complete. It was a little faster than the others, because it was pretty similar to the other project using the movie API.',
		challenges: [
			'This was the first time I worked with Angular, so there was a little learning curve starting off. I thought Angular was similar to the React library, in the layout of the files, but in more detail. That helped me wrap my head around the new framework. Some challenges I had were mostly little mistakes due to learning the new framework.',
			"I struggled to get the director's image to appear, but when looking back over the files, I had forgotten to add the imageUrl into the component.ts file. The other small issue was getting the user's birthday to appear in the profile view. Again looking at the files and using the rubber ducky method to go back over what is happening, I found I mistyped the birthday to import. This project also scrolls horizontally instead of vertically. This was my first time using this feature and it took a little playing around with the CSS on the NavBar to get it to stay in the place I wanted. A feature I still want to implement, would be adding a search bar.",
		],
		credits: [
			'Lead Developer',
			'Tutor: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/myFlix-Angular-client',
	},
	myflix: {
		id: 'myflix',
		title: 'myFlix App',
		overview:
			'myFlix is a single-page, responsive application with routing, rich interactions, and several interface views. This is the client-side to the Movie API. It lets movie enthusiasts access information about different movies, directors, and genres, whenever they want. Users have the ability to create an account, update their personal data, and save a list of their favorite movies.',
		carouselImages: [
			'../img/myFlix/myFlix.jpg',
			'../img/myFlix/favorite.jpg',
			'../img/myFlix/movieView.jpg',
		],
		img: [
			'../img/myFlix/movieView.gif',
			'../img/myFlix/profile.gif',
			'../img/myFlix/search.gif',
			'../img/myFlix/myflixDemo.gif',
		],
		purpose:
			'This is a personal project that was built to satisfy a full-stack development course at CareerFoundry. This project is used to demonstrate my abilities using React and JavaScript.',
		userStories: [
			"As a user, I want to be able to access information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in.",
			'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
		],
		objective:
			'Using React, build the client-side of a movie app based on its existing server-side code (REST API and database)',
		approach: [
			'Create Repo and Set up Parcel',
			'Used JSX to create MainView, MovieCard, and MovieView components',
			'Connected components myFlix API to fetch movie data from the database',
			'Added login and registration views, and integrated with MainView component',
			'Added some styling with React Bootstrap',
			'Added routing to source code',
			'Create director, genre, and profile views',
			'Director view fetches and displays data about the a particular director and lists their other movies',
			'Genre view fetches and displays data about a particular genre and other movies with same genre',
			"User Profile allows user to update their information, deregister, display user's favorite movies, and allows to remove a favorite movie",
			'Code to send JWT token alongside client requests for authenticated users',
			'Implement client-side form validation for login and registration views based on server-side validation',
			'Added React Redux to implement the Flux design pattern',
			'Hosted on netlify',
		],
		tech: 'React, React Redux, Bootstrap, JSX, Parcel, Node, SCSS',
		duration:
			'This project took a little under 2 months. The challenges I experienced set me back a couple weeks.',
		challenges: [
			'This project was by far the most challenging project I have done so far. This was my first time using React, and it took a little bit for me to understand it. To help understand it, I would reread the lesson information, along with supplementing it with videos. Once I understood how it worked, I really appreciated the way it is broken out into components. Another challenge I had was with the Profile View. It took a lot of google searches and help from the tech community to figure out how to get the users favorite movies to display. Once I got through everything I wanted I felt so accomplished. If I was to go back to this project I would add a few more features, like being able to search for actors and see all their movies. And letting users add new movies to the database.',
		],
		credits: [
			'Lead Developer',
			'Tutor: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/myFlix-client',
	},
	budget: {
		id: 'budget',
		title: 'Budget Planner',
		overview:
			'A fintech company is adding a new financial planning feature to their existing web app. It allows users to track their income and expenditures, and manage their budget.',
		carouselImages: [
			'../img/budget/screenshotTop.jpg',
			'../img/budget/addExpense.jpg',
			'../img/budget/editExpense.jpg',
		],
		img: [
			'../img/budget/demo.gif',
			'../img/budget/expenseSubmit.jpg',
			'../img/budget/deleteExpense.gif',
			'../img/budget/addExpense.gif',
		],
		purpose:
			'This feature was built in accordance with CareerFoundry curriculum to learn and practice working as a developer/designer team.',
		userStories: [
			'As a user, I want to be able to add, edit, adn delete a budget amount.',
			'As a user, I want to be able to add, edit, and delete expenses from the budget.',
			'As a user, I want to be able to see my total balance after expenses have been extracted from my budgeted amount.',
		],
		objective:
			'Using React, build a new feature that the user can edit to fit their needs.',
		approach: [
			'We started by meeting as a team and discussing the needs of this new feature',
			'After the designer did their research, they put together a first draft.',
			'We met as a team to discuss the design and go over and development constraints and discuss any confusion with the design',
			'The designer went back to fix a few things and I started to develop the pages and layout',
			'The routing was laid out, the functionality of saving the information to local storage was next',
			'With functionality working we met as a team again to go over design changes',
			'Last step was to implement the design',
		],
		tech: 'React, Bootstrap, JavaScript, LocalStorage, Figma',
		duration:
			'This project was completed using Agile project management method, and was completed in a week.',
		challenges: [
			'As a team, my partner and I worked together wonderfully. The challenges came in where we each lived. We were in two different time zones, seven hours apart. So finding a meeting time was difficult for us. With living in two different countries, there was also a language barrier, sometimes we had to say things multiple ways before the other person was able to understand. Even with these barriers, we were able to put out a product we were both happy with.',
			'Another challenge we faced was time contraints. This was a 2-week sprint, but both us had our partners dropout of the project which lead us to not getting started until a week into the sprint. We then only had a week to put together a product. There are things we wished we had more time to implement, but overall were happy with the product we made.',
		],
		credits: ['Lead Developer', 'UX Designer: Karla Victoria Olteanu'],
		github: 'https://github.com/mhyneman8/budget-planner',
	},
	movie: {
		id: 'movie',
		title: 'Movie API',
		overview:
			'This is a RESTful API that uses Node.js and Express. It interacts with a non-relational database (MongoDB). This application is the complete server-side of a movie web application. It includes the server, business logic, and business layers of the application.',
		carouselImages: [
			'../img/movie/movieAPi.jpg',
			'../img/movie/login.jpg',
			'../img/movie/userSchema.jpg',
		],
		img: [
			'../img/movie/login.jpg',
			'../img/movie/register.jpg',
			'../img/movie/userSchema.jpg',
			'../img/movie/favorites.jpg',
		],
		purpose:
			'This was built as a personal project for the CareerFoundry Full-Stack program. It was to show my ability to build the backend of an application.',
		userStories: [
			"As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I've watched or am interested in.",
			'As a user, I want to be able to create a profile so I can save data about my favorite movies.',
		],
		objective:
			'To build the server-side component of a movie web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.',
		approach: [
			'Installed Node and set up project directory',
			'Created a package.json file',
			'Imported all necessary packages into the project directory',
			'Defined project dependencies',
			'Routed HTTP requests using Express',
			'Defined the endpoints for the REST API',
			'Tested endpoints using Postman',
			'Created a non-relational (NoSQL) database using MongoDB',
			'Modeled business logic using Mongoose',
			'Tested endpoints with Postman again',
			'Implemented HTTP authentication and JWT (token-based) authentication',
			'Incorporated data validation logic',
			'Implemented data security and storage controls',
			'Updated documentation',
			'Hosted project using Heroku',
		],
		tech: 'JavaScript, Node.js, Express, MongoDB, NoSQL, Mongoose, HTTP authentication, JWT authentication, Postman',
		duration:
			'Building this movie backend project took about a month to complete.',
		challenges: [
			'This project was my first look into the backend of an application. It gave me lots of practice using the terminal, and how picky it is. I learned the hard way using the terminal to build a SQL database. Using MongoDB to build the NoSQL was a sanity saver.',
			'If I were to go back to this project some of the changes I would make would be to make the URLs not case sensitive and to add more information about the movies. For example, add more than just the top 3 actors, or list all the genres the movies fit under.',
		],
		credits: [
			'Lead Developer',
			'Tutor: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/movie_api',
	},
	ccl: {
		id: 'ccl',
		title: 'Center for Changing Lives',
		overview:
			'Center for Changing Lives is a nonprofit based in Chicago. They partner with those held back by lack of resources and economic opportunities to uncover possibilities, overcome barriers, and realize their potential. Their clients had a hard time navigating the CCL website to find needed resources.',
		carouselImages: [
			'../img/ccl/homepage.jpg',
			'../img/ccl/newPrograms.jpg',
			'../img/ccl/mission.jpg',
		],
		img: [
			'../img/ccl/oldHome.jpg',
			'../img/ccl/homepage.jpg',
			'../img/ccl/sp-en.gif',
			'../img/ccl/newPrograms.jpg',
			'../img/ccl/ccl-demo.gif',
		],
		purpose:
			'This project was working with CCL as a client to help lift up a much needed local organization.',
		userStories: [
			'As a user, I want to be able to sign up for services',
			'As a user, I want to easily find available resources',
		],
		objective: 'To make website easy to navigate and find programs users need',
		approach: [
			'Meeting with organization to discuss their needs',
			'Got feedback from organization employees, to see their current pain points with the website',
			'Set up navigation with clear categories and sub categories',
			'Update page layouts, added images to break up long text',
			'Added/updated content to pages',
			'Created two different navigation bars, based on spanish and english',
			'Update spanish side with translated content',
			'Made upgraded page live on SquareSpace',
		],
		tech: 'CSS, Javascript, and SquareSpace design tools',
		duration:
			'This project was working on from January to April 2022, working a couple hours a week on it, and meeting once a week with the client to get updated content and needs.',
		challenges: [
			'Working with the staff at CCL was a great experience. They had a lot on their plates, which was a challenge. We weren’t able to get the website finished as fast as we had hoped becuase the staff had so many other parts of their jobs to do on top of the website. It was a slow process getting the content updated and getting the correct forms and information for certain programs.',
			'Another challenge was redesigning a site that was already made. Multiple people have been working on this site before I started. So there were a lot of pages that needed to be updated and just about every part of the page was done a different way. I had to do a little extra work to make sure all the pages were uniform.',
			'The other challenge I had to overcome, was to make two separate sites, using only one site on SquareSpace. Javascript had to be embedded so a filter was used if they clicked Spanish, then the navigation bar would change to the spanish versions.',
		],
	},
	chat: {
		id: 'chat',
		title: 'Chat App',
		overview:
			'Chat app is a phone application that allows users to chat with their friends and family. They can choose their chat screen background color and input their name. They can also send messages, images, and location in the chat room.',
		carouselImages: [
			'../img/chat/HomeScreen.jpg',
			'../img/chat/custom.jpg',
			'../img/chat/chat.jpg',
		],
		img: [
			'../img/chat/chatAppCrop.gif',
			'../img/chat/chat.jpg',
			'../img/chat/custom.jpg',
			'../img/chat/loginCrop.gif',
		],
		purpose:
			'This is a personal project that was built to satisfy a full-stack development course at CareerFoundry. This project is used to demonstrate my ability to use React Native.',
		userStories: [
			'As a user, I want to be able to easily enter a chat room so I can quickly start talking to my friends and family.',
			'As a user, I want to be able to send messages, images, and my location to my friends and family.',
			'As a user, I want to be able to read my messages offline so I can reread conversations at any time.',
			'As a user with a visual impairment, I want to use a chat app that is compatible with a screen reader so that I can engage with a chat interface.',
		],
		objective:
			'To build a chat app for mobile devices using React Native. The app will provide users with a chat interface and options to share images and their location.',
		approach: [
			'Set up a development environment to work with React Native and Expo.',
			"Created app's layout using native UI components based on the designers screen designs.",
			'Built chat screen and used Gifted Chat library to build the chat functionality',
			'Authenticated users anonymously with Firebase',
			'Stored conversations in the Firestore Database',
			"Stored chats locally using asyncStorage so they're available offline",
			'Authenticated users nad store chat messages in Firestore as well as on the device when users are online',
			'Retrieved locally stored messages and disallowed the creation of new messages when users are offline',
			"Let users pick an image from the device's library and take pictures with the device's camera app",
			'Stored images in Google Firebase Cloud Storage and send images via Gifted Chat',
			'Let users send their current location in a map view via Gifted Chat',
			'Applied accessibility considerations to app design and development',
		],
		tech: 'React Native, Expo, and Google Firestore Database, Firebase Cloud Storage, Gifted Chat',
		duration:
			'This project took just over a month. I took a couple breaks while working on it.',
		challenges: [
			'This project came with some challenges that really tested me. Getting the Firebase to import correctly took lots of troubleshooting. The CareerFoundry curriculum had us install a depreciated version. This led to many errors. I had to check the documentation of various versions, uninstall and install several times, trying different combinations to it to import, and searched the internet for a solution. In the end I finally got the right combination to import. Some things I would like to add to this project at a later date, is to let users sign in and have multiple chat rooms from which to choose.',
		],
		credits: [
			'Lead Developer',
			'Tutor: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/chat-app',
	},
	poke: {
		id: 'poke',
		title: 'Pokedex',
		overview:
			'This application lets the user look through a list of pokemon. If they would like more detail, they can click the name to find out more about each pokemon.',
		carouselImages: [
			'../img/pokedex/homepage.jpg',
			'../img/pokedex/modal.jpg',
			'../img/pokedex/pokedexDemo.gif',
		],
		img: [
			'../img/pokedex/loading.gif',
			'../img/pokedex/power.gif',
			'../img/pokedex/modalDetails.jpg',
			'../img/pokedex/pokedexDemo.gif',
		],
		purpose:
			'Pokedex is a personal project I built as part of my web development course at CareerFoundry. It demonstrates my ability to build a client-side application that can communicate with an external API. It utilizes HTML, CSS, and JavaScript to allow users to view details of selected pokemon.',
		userStories: [
			'As a user, I want to be able to view a list of data and see more details for a given data item on demand',
		],
		objective:
			'To build a small web application with HTML, CSS, and JavaScript that loads data from an external API and enables the viewing of data points in detail.',
		approach: [
			'Set up the basic outline for the webpage using HTML',
			'Made complex data of a couple pokemon to build the layout',
			'Implemented a forEach loop to print details on each pokemon',
			'Wrap respository in an IIFE to avoid accidentally accessing the global state',
			'Rendered static data from my data repository on the page',
			'Added basic styling',
			'Made the application accessible',
			'Loaded data from an external API via fetch',
			'Used Bootstrap to make the styling more clean and usable',
			'Added a loading indicator, search, and powerdown features',
			'Tested app to make sure it works added ESLint',
		],
		tech: 'JavaScript, CSS, HTML',
		duration: 'This web app took about 6 weeks to complete, working part time.',
		challenges: [
			'A challenging part of this project was to stay consistent with the theme of a handheld device. Making sure every new feature that was added works on the handheld screen. Everything had to fit in the screen and make the container look as close to the show’s pokedex as possible.',
			'There are a couple items I would change and add in the next iteration. I want to change the power off button from a window alert into a modal dialog that stays in the pokedex screen. I want to change the background into an image that looks like someone is holding the pokedex in the air, so the background would look like it is outside. It would also be nice for the user to be able to filter the results, like only see 1st evolution or specific type of pokemon.',
		],
		credits: [
			'Lead Developer',
			'Tutorial: Andrew Muscara',
			'Mentor: Alexis Gormley',
		],
		github: 'https://github.com/mhyneman8/simple-js-app',
	},
	forkfull: {
		id: 'forkfull',
		title: 'Changed by the Forkfull',
		overview:
			'This is a community space that extends the reach of a local food forest. Community members can learn how to care for the plants currently being grown, and also find out how to cook the fresh food.',
		carouselImages: [
			'../img/changed/changed.jpg',
			'../img/changed/who.jpg',
			'../img/changed/changedDemo.gif',
		],
		img: [
			'../img/changed/sticky.gif',
			'../img/changed/who.jpg',
			'../img/changed/who.jpg',
			'../img/changed/changedDemo.gif',
		],
		purpose:
			'This project was built for a client who was starting a food forest in their area. They wanted a site where the community could learn about the new non-profit and get involved.',
		userStories: [
			'As a user, I want to be able to learn about the non-profit and how to donate to them.',
			'As a user, I want to be able to engage the community and give them a place to get involved.',
		],
		objective:
			'Using React, build the client-side of a movie app based on its existing server-side code (REST API and database).',
		approach: [
			'Meeting with owner to talk about their needs',
			'Built basic HTML layout',
			'Add images',
			'Add styling',
			'Use JavaScript to add more functionality',
			'Hosted on GitHub',
		],
		tech: 'HTML, CSS, JavaScript',
		duration:
			'This website has been worked on intermittently for about 4 months. The finishing touches need to be added at this point, finish the copy and pictures to match what is growing at the moment',
		challenges: [
			'This was my first website to build for a client that was made completely with HTML, CSS, and JavaScript. There were many things I learned during this process. Having a vision of what I wanted to happen, and then having to figure out how to make that vision become reality. Which made the styling the most challenging part for me. To finish this project, I need to finish writing the copy and put in the rest of the pictures and link those pictures with the corresponding webpages.',
		],
		credits: ['Lead Developer & Designer'],
		github: 'https://github.com/mhyneman8/changed',
	},
	heart: {
		id: 'heart',
		title: 'Heart Connected',
		overview:
			'Heart Connected is an organization dedicated to providing community, education, and support for individuals affected by congenital heart disease (CHD) and their families. Founded by medical professionals passionate about caring for families impacted by CHD, Heart Connected aims to ease the challenges of living with a CHD diagnosis.',
		carouselImages: [
			'../img/hearts/forum.jpg',
			'../img/hearts/risk_quiz.jpg',
			'../img/hearts/hearts-home.jpg',
		],
		img: [
			'../img/hearts/hearts-home.jpg',
			'../img/hearts/tooltip.jpg',
			'../img/hearts/chd_class.jpg',
			'../img/hearts/home_vid.jpg',
		],
		purpose:
			'This project was created in partnership with a Physician Assistant obtaining their masters degree. Heart Connected was created as a functional prototype for their research project, “Mitigating the negative impact of a diagnosis: Early intervention in psychosocial support for severe CHD parents”. The primary goal is to foster hope and offer a potential crucial resource to families affected by CHD.',
		userStories: [
			'As a parent whose child was just given a diagnosis, I want a safe place to find information',
			'As a family member, I want to find support groups to feel less alone.',
		],
		objective:
			'To create a supportive and informative environment for those affected by CHD, leveraging the power of community and shared knowledge to improve quality of life.',
		approach: [
			'Meeting with PA to discuss the needs of the site.',
			'Chose to start with Next.js due to its SPA abilities and also being lightweight',
			'Started with an MVP, getting the skeleton of the site',
			'Education page was the most important to the student, so we focused on that page first. Entering the information and creating tooltips to highlight diagnosis that may be more complicated to understand',
			'The next important step was the risk factors calculator. This had to take in information and left users know what they should be looking out for and some suggestions about when to reach out for help',
			'From there we went page by page and then added more styling, when the time allowed',
		],
		tech: 'Next.js, Firebase/Firestore, Tailwind',
		duration: 'This site was built in under 2 months.',
		challenges: [
			'Creating the trauma risk factor calculator took extra work to get it correct. We needed the appropriate response to come out, depending on the answers the user gave. If the user had multiple trauma risk factors we need to break them up with positive affirmations.',
			'Another challenge was the quick turnaround. We needed to get this up and running by the research paper cut off. Juggling the needs of the site, with other obligations was tricky.',
		],
		credits: ['Lead Engineer & Designer', 'Consulting PA: Daniel Mungul'],
		github: 'https://github.com/mhyneman8/heart-connected',
	},
};

export { Modal as modal };
	console.log(project);
	// const { title, overview, carouselImages, img, purpose, userStories, objective, approach, tech, duration, challenges, credits, github } = projectDescription[project];
	const {
		title,
		overview,
		carouselImages,
		img,
		purpose,
		userStories,
		objective,
		approach,
		tech,
		duration,
		challenges,
		credits,
		github,
	} = content[project];
	console.log('project', project);
	console.log('title', title);
	const modal = document.createElement('aside');
	modal.className = 'modal-project';
	modal.setAttribute('tabindex', '-1');
	modal.setAttribute('role', 'dialog');
	modal.setAttribute('aria-modal', 'true');
	modal.setAttribute('aria-hidden', 'true');
	modal.innerHTML = `
        <div class="modal-project__backdrop" data-dismiss="modal"></div>
        <section class="modal-project__inner">
            <button type="button" class="modal-project__close-icon" title="Close" data-dismiss="modal" aria-label="Close dialog"></button>
            <div class="modal-project__header">
            <h1>${title}</h1>
            </div>
            <div class="modal-project__content">

            <div class="links">
                <a href=${github} role="button" class="links-btn" target="_blank">
                    Code
                </a> 
            </div>
            <div class="carousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block carousel-img img-fluid" src=${
															carouselImages[0]
														} alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block carousel-img img-fluid" src=${
															carouselImages[1]
														} alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block carousel-img img-fluid" src=${
															carouselImages[2]
														} alt="Third slide">
                        </div>
                    </div> <!-- carousel-inner -->
                </div> <!-- end of carousel example indicators -->
            </div> <!-- end of crouself -->
        
            <div class="reflection">
                <h4 class="ref-header">Overview</h4>
                <p class="ref-text">
                    ${overview}
                </p>
        
                <div>
                        <img src=${img[0]} alt="">
                </div>
        
                <h4 class="ref-header">Purpose & Context</h4>
                <p class="ref-text">
                    ${purpose}
                </p>
                <span>User Stories:</span>
                ${userStories
									.map((story) => `<p class="text-left w-75 ml-4">${story}</p>`)
									.join('')}
        
                <div>
                    <img src=${img[1]} alt="">
                </div>
        
                <h4 class="ref-header">Objective</h4>
                <p class="ref-text">
                    ${objective}
                </p>
        
                <h4 class="ref-header">Approach</h4>
                <p class="ref-text">
                    <span class="bold">Technologies:</span>
                    ${tech}
                </p>
                <ul class="text-left">
                    ${approach.map((step) => `<li>${step}</li>`).join('')}
                </ul>
        
                <div>
                    <img src=${img[2]} alt="Kanban Board">
                </div>
        
                <h4 class="ref-header">Challenges</h4>
                ${challenges
									.map((challenge) => `<p class="ref-text">${challenge}</p>`)
									.join('')}
            
        
                <div>
                    <img src=${img[3]} alt="Director View">
                </div>
        
                <h4 class="ref-header">Duration</h4>
                <p class="ref-text">
                    ${duration}
                </p>
                
                <h4 class="ref-header">Credits</h4>
                <p>
                    ${credits
											.map(
												(credit) => `
                        <span>${credit}</span>
						<br>
                        `
											)
											.join('')}
                </p>
            </div> <!-- end of reflection -->
            </div>
        </section>
        
    `;

	return modal;
}
