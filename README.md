# Ceapp

## Setup

### Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/) (included with Docker on Windows and macOS)

Or alternatively

- [Node 12](https://nodejs.org/en/)
- Npm 6 (should be included with Node.js, but depending on how you install Node it may need to be installed separately)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

### Building

To setup the project, run the following commands:

```
$ cp client/src/env.js.example client/src/env.js
$ docker-compose build
$ docker-compose run client npm install
```

After that, the project can be started with `docker-compose up` and it will be available at `http://localhost:8080`. Any changes made to the `client` or `server` directories will be automatically picked up by the project while running. So any changes to source code shouldn't require a server restart.

### Building without Docker

Without Docker, you can build the project using the following commands:

```
$ cp client/src/env.js.example client/src/env.js
$ npm install
```

Then the project can be started up using `npm run server`.
