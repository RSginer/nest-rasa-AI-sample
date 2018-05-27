# nest-rasa-AI-sample

## Description

project-using-nest-and-rase-ai-sample

## Deploy RASA NLU and RASA Core

[https://nlu.rasa.com/]Rasa NLU Guide
[https://core.rasa.com/]Rasa Core Guide

```bash 
# RASA NLU
docker pull rasa/rasa_nlu
docker run -p 5000:5000 --name rasa-nlu rasa/rasa_nlu
#RASA CORE
docker pull rasa/rasa_core
docker run -p 5005:5005 --name rasa-core rasa/rasa_core
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

