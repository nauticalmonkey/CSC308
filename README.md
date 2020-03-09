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


## Testing

### Testing strategy document:

https://docs.google.com/document/d/10wRFIB1uYkgsSdiZvX0hn5l35Vfa1HGzLJQowpLX4lU/edit?usp=sharing

### Unit/Integration Tests:

Code coverage report: http://users.csc.calpoly.edu/~nbaggett/hopsy/index.html

### Acceptance Testing:

### Continuous Integration:

Link to our Travis CI: https://travis-ci.org/nauticalmonkey/CSC308/builds/660368647?utm_source=github_status&utm_medium=notification

## Code Analysis

### Style guides:

Front End Style Guide: https://github.com/airbnb/javascript/tree/master/react

Back End Style Guide: https://google.github.io/styleguide/javaguide.html

### SonarCloud:

Here is a link to our SonarCloud report: https://github.com/nauticalmonkey/CSC308/wiki/Static-Code-Analysis
