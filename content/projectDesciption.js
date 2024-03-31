export const description = {
    meet: {
        id: 'meet',
        title: 'Meet App',
        overview: 'MyFlix is a single-page, responsive movie app that allows movie enthusiasts to access information about different movies, directors, and genres whenever they want. It\'s built with Angular, with routing and several interface views. ',
        carouselImages: ['../img/angular/angular.jpg', '../img/angular/director.jpg', '../img/angular/profile.jpg'],
        img: ['../img/angular/profile.jpg', '../img/angular/angularDemoCrop.gif', '../img/angular/trello.jpg', '../img/angular/director.jpg'],
        purpose: 'This application was built in accordance with the CareerFoundry curriculum to learn and practice the Angular framework. This will support the existing server-side built earlier (Movie API) by facilitating user requests and rendering the response from the server-side via a number of different interface views. This app demonstrates my Angular skills and my ability to create straightforward documentation for other developers and team members.',
        userStories: ['As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I\'ve watched or am interested in.', 'As a user, I want to be able to create a profile so I can save data about my favorite movies.'],
        objective: 'To build a client-side for the movie API using Angular.',
        approach: [
            'Plan out the project using a Kanban board. Kept track of what needed to be done, was in progress, and what was completed',
            'Installed Angular CLI and created a new Angular app using the angular cli',
            'Generate service file to implement logic for making API calls',
            'Used Angular Material to create the user registration and login inside a dialog box',
            'Created a welcome screen so users can either login or register before seeing the movies list',
            'Created movie card',
            'Created user profile component that allows user to view and edit their data',
            'Used Angular\'s router to implement a route for the welcome, movie card, and user views.',
            'Added links to the movie card to get more information on genre, director, movie details, and a button to add a movie to user\'s favorites',
            'Make app responsive using Angular Material',
            'Hosted on GitHub Pages'
        ],
        tech: 'React, Node, Express, MongoDB',
        duration: 'This project took about a month to complete. It was a little faster than the others, because it was pretty similar to the other project using the movie API.',
        challenges: [
            'This was the first time I worked with Angular, so there was a little learning curve starting off. I thought Angular was similar to the React library, in the layout of the files, but in more detail. That helped me wrap my head around the new framework. Some challenges I had were mostly little mistakes due to learning the new framework.',
            'I struggled to get the director\'s image to appear, but when looking back over the files, I had forgotten to add the imageUrl into the component.ts file. The other small issue was getting the user\'s birthday to appear in the profile view. Again looking at the files and using the rubber ducky method to go back over what is happening, I found I mistyped the birthday to import. This project also scrolls horizontally instead of vertically. This was my first time using this feature and it took a little playing around with the CSS on the NavBar to get it to stay in the place I wanted. A feature I still want to implement, would be adding a search bar.'
        ],
        credits: ['Andrew Muscara', 'Alexis Gormley'],
        github: 'https://github.com/mhyneman8/myFlix-Angular-client',


    }
}
