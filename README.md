# CSC308/309

## Project set up guide

### Front-end:
Follow the expo quick start guide https://docs.expo.io/versions/latest/

Clone the repository and cd into CSC308/Frontend/Hopsy and run:

```
npm install
```

You'll also need to move a folder after you do this. Find the folder `babel-preset-expo` inside `node_modules` and move this into the folder `@babel`. Rename `babel-preset-expo` to `preset-expo`.

In order to run the app, you'll also need to create a new file named `.env` inside the Hopsy root folder and paste the API key into it. Ask a team member if you need the API key.

In order to run the application do:

```
expo start
```

Then open the emulator of your choice with the Expo app installed.

### Back-end:
To run the backend follow the following steps.

Before cloning this repository be sure that you have a development environment that can support Java projects with Maven. Maven manages all dependencies for the backend and is essential for this project. 

Go to https://www.mongodb.com/cloud/atlas and sign in using credentials provided by one of the Hopsy team members. Navigate to Network Access and add the IP address from which you will be running the backend to the list of whitelisted IPs. 

Clone the repository into a suitable location on your local machine.

Make sure you are connected to the internet, and then simply run the main method in Backend/Hopsy/src/main/java/hopsy/Application.java. 


## Testing

### Testing strategy document:

https://docs.google.com/document/d/10wRFIB1uYkgsSdiZvX0hn5l35Vfa1HGzLJQowpLX4lU/edit?usp=sharing

### Unit/Integration Tests:

Code coverage report: http://users.csc.calpoly.edu/~nbaggett/hopsy/index.html

### Acceptance Testing:

Acceptance testing specification document: https://docs.google.com/document/d/1tHCIRJKYk_H_iYVExhtswXe716gVt7wNEbK9pKXNBxc/edit?usp=sharing

Unfortunately, we were unable to perform automated acceptance testing for our project because we use Expo to build our project. Had we known this when we began development, we would not have used Expo and would have just built a standard react-native project. Detox and other acceptance testing frameworks are not compatible with Expo and in order to perform automated acceptance testing we would need to refactor our entire project. To make up for this, we performed manual acceptance tests and the results of this can be viewed here: https://docs.google.com/document/d/1dMCt_mTOCQ_u3nZmyzw51SuwZRImi-SVU9K7eh52X_0/edit?usp=sharing

### Continuous Integration:

In order to set up Travis CI one needs to have a GitHub account and also have permissions to a project on GitHub.

Getting Started:

Begin by going to `Travis-ci.com` and sign in with your GitHub account. After accepting the terms and giving Travis CI permissions to your repository, proceed by adding `.travis.yml` file to Git. After pushing this file, a build test should occur automatically and should either fail or pass. Configuring the `.travis.yml` file allows the user to customize what the CI server should run any time a change is made on GitHub. In our case `language: java` allows us to run the backend automatically. This file must then be configured to select the correct working directory and thus be able to run tests automatically. 

## Code Analysis

### Style guides:

Front End Style Guide: https://github.com/airbnb/javascript/tree/master/react

Back End Style Guide: https://google.github.io/styleguide/javaguide.html

### SonarCloud:

Here is a link to our SonarCloud report: https://github.com/nauticalmonkey/CSC308/wiki/Static-Code-Analysis
