import { EncurtadorLinks } from './model/encurtadorLinks.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EncurtadorController } from './encurtador.controller';
import { encurtadorProviders } from './provider/encurtador.providers';
import { EncurtadorService } from './provider/encurtador.service';

@Module({
    imports:[SequelizeModule.forFeature([EncurtadorLinks])],
    exports: [SequelizeModule],
    controllers: [EncurtadorController],
    providers: [
        EncurtadorService,
        ...encurtadorProviders,
      ],
})
export class EncurtadorModule {}
