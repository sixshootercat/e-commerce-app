This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the root project directory, you can run:

### `yarn start`

Runs the app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `docker build -t crown-e-commerce:latest .`

Builds docker image

### `docker run -it -p 8000:80 crown-e-commerce:latest`

Creates docker container and runs it. Dockerized app can be ready be opened in http://localhost:8000

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
