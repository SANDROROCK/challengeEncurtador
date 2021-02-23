import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncurtadorController } from './encurtador/encurtador.controller';
import { EncurtadorService } from './encurtador/provider/encurtador.service';
import { encurtadorProviders } from './encurtador/provider/encurtador.providers';
import { EncurtadorLinks } from './encurtador/model/encurtadorLinks.model';
import * as dotenv from "dotenv";

dotenv.config();
 @Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'challengeEncurtador',
      models: [EncurtadorLinks],
    })
  ],
  controllers: [AppController, EncurtadorController],
  providers: [AppService, EncurtadorService,
    ...encurtadorProviders,],
})
export class AppModule { }
