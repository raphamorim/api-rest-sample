# API Sample

## Requirements

- Node.js v14 (this project use ESM feature and can not run without node `13`, `14` or `15`)
  - More details: https://nodejs.org/docs/latest-v14.x/api/esm.html
- Yarn (https://yarnpkg.com/lang/en/docs/cli/install/)
- Docker (optional but strongly recommended), [install guide](https://docs.docker.com/get-docker/)
- curl (optional but recommended since it's used in this doc to check routes), [install guide](https://curl.haxx.se/download.html)

This project needs an API key of [The Movie DB](https://www.themoviedb.org/), it's configure as `THEMOVIEDB_API_KEY`. So before anything, run:

```zsh
$ export THEMOVIEDB_API_KEY=<my-api-key>
```

## Installation

Docker is optional but recommended, if you don't want to use docker, run the following commmand on project root and skip to [Running section](#Running):

```zsh
$ yarn && yarn start
```

Using [docker](https://docs.docker.com/), run the following commands to build and run the API:

```zsh
$ make build && make run
```

Run `docker ps`, to check the container running, it should return something like this:

```zsh
docker ps
CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS                    NAMES
e6b7a92af9d7        raphamorim/api-rest-sample   "docker-entrypoint.s…"   9 seconds ago       Up 8 seconds        0.0.0.0:8000->8080/tcp   happy_buck
```

Check if the API is running:

```zsh
$ curl localhost:8080/health
RUNNING
```

## Running

The API have 2 routes: `/health` and `/trailers`

#### `/health`

```zsh
$ curl -X GET -H "Content-type: application/json"  -H "Accept: application/json" -d '{"url":"https://content.viaplay.se/pc-se/film/bad-boys-for-life-2020"}' "http://localhost:8080/health"
```

###### Result

```
RUNNING
```

#### `/trailers`

```zsh
$ curl -X GET -H "Content-type: application/json"  -H "Accept: application/json" -d '{"url":"https://content.viaplay.se/pc-se/film/bad-boys-for-life-2020"}' "http://localhost:8080/trailers"
```

###### Result

```
[
  'https://www.youtube.com/watch?v=jKCj3XuPG8M',
  'https://www.youtube.com/watch?v=-P-C6I-jZwQ'
]
```
