module.exports = {
    development: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSWORD,
       database: 'challengeEncurtador',
    },
    test: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: '',
       password: '',
       database: '',
    },
    production: {
       dialect: 'postgres',
       host: 'localhost',
       port: 5432,
       username: '',
       password: '',
       database: '',
    },
 }