## Project Name and Description

#### Shift List Application

This is an application showing the available shifts for a user thats taken from an API

See here for the application plan and architecture - [https://drive.google.com/file/d/1kvkp4L77DN-XD5qHHJIycqsG3VM302Q2/view?usp=sharing](https://drive.google.com/file/d/1kvkp4L77DN-XD5qHHJIycqsG3VM302Q2/view?usp=sharing)

## How to setup and run locally

First clone the repo by running in the terminal

    git clone git@github.com:saf94/shift-list-app.git

Then run the following to install packages

    npm install or yarn install

Finally run the following command to run the app

    npm start or yarn start

You will be able to view the app at [http://localhost:3000](http://localhost:3000) in your browser

## Improvements & Next Steps

Given more time and investment I would do the following

-   Based on current requirements

    -   Add styling and make the list of shifts look more readable and nicer design
    -   Mock the user in the tests to protect from breaking tests due to changing user details
    -   Name the application (currently just called React App)
    -   Abstract out functions into seperate files

-   If considering scaling the app

    -   Ability to filter and search through the shifts to find shifts based on criteria
    -   Add ability to customise the user, possibly authentication with user providing their details and those being saved
    -   Add a backend to do the above and handle any other data requirements
    -   Deploy the application

-   If considering further requirements
    -   A button or cta that allows user to apply to the shift
    -   Add alerts for when new shifts become available
    -   Filter or sort shifts based on users location (using geolocation)
