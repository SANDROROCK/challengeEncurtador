import { EncurtadorLinksCreate } from './model/encurtadorCreate.model';
import { json } from 'sequelize/types';
import { EncurtadorLinks } from './model/encurtadorLinks.model';
import { EncurtadorService } from './provider/encurtador.service';

import { Body, Controller, Get, Param, Post, Req, Res, HttpStatus } from '@nestjs/common';

import { Request, Response } from 'express';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiBody,

} from '@nestjs/swagger';



@Controller('/')
@ApiTags('Encurtador')

export class EncurtadorController {

  constructor(private encurtadorService: EncurtadorService) { }

  @Post()
  @ApiOperation({ summary: 'Criar Link encurtado' })
  @ApiResponse({ status: 200, description: 'newUrl' })
  @ApiBody({
    description: 'Envio da url para encurtar',
    type: EncurtadorLinksCreate,
  })

  async create(@Body() url: EncurtadorLinksCreate, @Req() req: Request, @Res() res: Response) {

    let host = req.get('host')

    let newUrl = "http://" + host + "/" + await this.encurtadorService.create(url.url)
    res.status(200).json({
      newUrl: newUrl
    });

  }


  @Get()
  findAll() {
    return this.encurtadorService.findAll()
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Redireciona para o link encurtados',
  })
  @ApiParam({ name: 'code', type: String })

  async findCode(@Param() params, @Req() req: Request, @Res() res: Response) {

    try {
      var url = await this.encurtadorService.findByCode(params.id)
      console.log(url)
      url ? res.redirect(301, url) : res.status(404).json({ erro: 'DateExpiry' });



    } catch (error) {
      res.status(404).json(error);

    }

  }
}
