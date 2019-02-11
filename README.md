This web app is a React quiz which tests the user's react knowledge. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `cd tests && gradle clean test`

Runs the acceptance tests.

## Tech stack

- React 
- Typescript
- MobX
- Cucumber/ Java (for tests)

## Tests

There are acceptance tests under the `tests` directory which are written in Java and cucumber. It is advised
to open the tests directory as a different IDE project, so gradle and Javascript don't confuse each other. 

## Deployment

The app is automatically deployed to Heroku after a push to master.  