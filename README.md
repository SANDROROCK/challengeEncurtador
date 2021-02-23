<p align="center">
  <a href="" target="blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCaRxzUB9AY0KLFJcxgQawgbR-dd3CpsPuM98bSi-I3PX6Y1-M_tnAaulEz6MVqXFeMks&usqp=CAU" width="320" alt="Logo" /></a>
</p>

## Description

Api criada com framewwok [Nest](https://github.com/nestjs/nest) para encurtar urls

## Installation

```bash
$ npm install
```

## Iniciando a Api local sem Docker

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Iniciando sua api no Docker

```bash

$ docker-compose up --build

```

A API estará ouvindo suas solicitações em http://localhost:8081


## Instalação

Renomear .env.example para .env e incluir use e password de conexão com o postgres


```bash
# instalar dependencias
$ yarn add

# criar o banco 
$ npx sequelize-cli db:create

# criar tabelas no banco 
$ npx sequelize-cli db:migrrate

# iniciar a aplicação em desenvolvimento
$ yarn start:dev

# iniciar a aplicação em produção
$ yarn start:prod
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
```
Caso seja feita uma requisção get na nova url devolvida pela api o o navegador deverá direcionar para url anteriomente encurtada


Documentação

http://localhost:8081/api/
