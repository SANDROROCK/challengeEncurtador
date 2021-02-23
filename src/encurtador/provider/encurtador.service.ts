import { EncurtadorLinks } from '../model/encurtadorLinks.model';
import { Inject, Injectable } from '@nestjs/common';
import { Op } from "sequelize";



@Injectable()
export class EncurtadorService {
    constructor(
        @Inject('ENCURTADOR_REPOSITORY') private encurtadorRepository: typeof EncurtadorLinks) { }


    async findAll() {
        return await this.encurtadorRepository.findAll();
    }

    async findByCode(code) {

        var result = await this.encurtadorRepository.findOne({
            where: {
                code: code,
                dateExpiry: { [Op.gte]: new Date() },

            }
        })

        return result.url



    }

    async findByUrl(url) {
        return await this.encurtadorRepository.findOne({
            where: {
                dateExpiry: { [Op.gte]: new Date() },
                url: url,

            }
        })


    }
    async create(url: string): Promise<any> {

        const encurtador = new EncurtadorLinks()

        //Data de vencimento
        let dataExpira = new Date();
        dataExpira.setDate(dataExpira.getDate() + 5);


        //Validando se já existe um código para a url , caso sim ele retorna o atual
        let oldUrl = await this.findByUrl(url)
        if (oldUrl) {

            return oldUrl.code
        } else {
            //Setando dados
            encurtador.url = url
            encurtador.dateExpiry = dataExpira
            encurtador.code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
            try {
                await encurtador.save()

                return encurtador.code

            } catch (error) {
                return error
            }
        }





    }



}
