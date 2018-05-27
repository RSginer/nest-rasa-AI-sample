## Deploy Rasa NLU and Rasa Core using Docker

[Rasa NLU Guide](https://nlu.rasa.com/)
[Rasa Core Guide](https://core.rasa.com/)

```bash 
# RASA NLU
docker pull rasa/rasa_nlu
docker run -p 5000:5000 --name rasa-nlu rasa/rasa_nlu
#RASA CORE
docker pull rasa/rasa_core
docker run -p 5005:5005 --name rasa-core rasa/rasa_core
```
### Optional Rasa UI

[Rasa UI Repo](https://github.com/paschmann/rasa-ui)

```
git clone https://github.com/paschmann/rasaui.git
cd rasaui && npm install
docker build -t rasa-ui .
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

