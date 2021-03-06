import { Get, Controller, Post, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from './interface/query.model';
import * as fetch from 'isomorphic-fetch';
import { environment } from './environment/environment';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Get('/query/:text')
  query(@Param() params): Promise<any> {
    return fetch(`${environment.rasa_nlu_endpoint}/parse?q=${params.text}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      });
  }
}
