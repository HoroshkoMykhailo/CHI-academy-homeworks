import { JsonController, Get } from 'routing-controllers';

@JsonController('/')
export class MainController {
    @Get('/')
    getAuthor(): { author: string } {
        return { author: 'Mykhailo Horoshko' };
    }
}