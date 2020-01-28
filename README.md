# Ceapp

## Setup

### Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/) (included with Docker on Windows and macOS)

### Building

Before your your first time building the project, run `docker-compose build` in the project root.

After that, the project can be started with `docker-compose up`. Any changes made to the `client` directory will be automatically picked up by the npm build server. So any changes to source code shouldn't require a server restart, but updating configuration files like `package.json` will.

The initial step (`docker-compose build`) will only need to be repeated whenever any of the `Dockerfile`s change.
