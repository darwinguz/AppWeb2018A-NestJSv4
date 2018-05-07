import {Get, Controller} from '@nestjs/common';

//decoradores que dan funcionalidad extra
@Controller()
export class AppController {
    @Get()
    root(): string {
        return 'Hello q ase!';
    }
}
