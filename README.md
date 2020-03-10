# React AWS Auth Boilerplate

A Boilerplate for React apps providing authorisation functionality through AWS Cognito and styled with Material UI.

## Architecture

The app's architecture aligns with the semantics and directory structure as defined in [this guide](http://bit.ly/scaleable-apps).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Docker

Alternatively, the application can be ran via a Docker container. We build the image as dev and prod variants.

- _dev_ uses a Node server to run the application within the container, using /src as the working directory, with hot re-loading enabled, on the standard 3000 port
- _prod_ builds the React application and serves it via Nginx, via port 80

Install [Docker for Desktop](https://hub.docker.com/?overlay=onboarding)

#### Run as Devlopment

Build the Docker image:

```bash
# see /Dockerfile
# tag as 'dev'
docker build -t excelian-bank:dev .
```

Run the Docker image:

```bash
# mount /app as working dir
# expose node process to other Docker containers for IPC via port 3000
# expose node process to host via port 3001
# remove container and volumes on exiting
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm excelian-bank:dev
# open http://localhost:3001
```

#### Run as Production

Build the Docker image:

```bash
# see /Dockerfile.prod
# tag as 'prod'
docker build -f Dockerfile.prod -t excelian-bank:prod .
```

Run the Docker image:

```bash
# see /nginx/bp-docker-ui-react.conf
# exposed on port 80
# remove container on existing
docker run -it -p 80:80 --rm excelian-bank:prod
# open http://localhost
```

Push to a container registry:

```bash
docker push <registry destination>:<version tag>
```
