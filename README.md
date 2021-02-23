<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC560BAQFQGgnrpUs9EQ%2Fcompany-logo_200_200%2F0%2F1560537752201%3Fe%3D2159024400%26v%3Dbeta%26t%3DTOHzAqCobFUKZBoaI7lfvIsYlCP51NtEJBiwzq6KEJI&imgrefurl=https%3A%2F%2Fbr.linkedin.com%2Fcompany%2Fwiser-educa%25C3%25A7%25C3%25A3o&tbnid=iy0TLea10gmtvM&vet=12ahUKEwjW9-PWn4DvAhWgBLkGHRnjCpYQMygAegUIARChAQ..i&docid=JaT1v-xSbN1RlM&w=200&h=200&q=wiser%20educa%C3%A7%C3%A3o&ved=2ahUKEwjW9-PWn4DvAhWgBLkGHRnjCpYQMygAegUIARChAQ width="320" alt="Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Desafio Técnico e Criativo proposto pela Wiser Educação</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Api criada com framewwok [Nest](https://github.com/nestjs/nest) para encurtar urls

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
$ npm run start:prod
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

## Funcionamento


Realizar uma requisição POST em http://127.0.0.1:8081 com o corpo da requisição contendo as seguinte informação :

```bash
{
  url:'http://teste.com.br'
}
```

Deverá ser devolvido uma nova url encurtada.

```bash
{
  newUrl:'http://localhost:ty254s'
}

Caso seja feita uma requisção get na nova url devolvida pela api o o navegador deverá direcionar para url anteriomente encurtada
