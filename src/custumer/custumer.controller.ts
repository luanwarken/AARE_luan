
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustumerService } from './custumer.service';
import { Custumer } from './custumer.entity';
import { plainToClass } from "class-transformer";
import { CustumerDto } from './custumer.dto';

@Controller('custumers')
export class CustumerController {

    constructor(private readonly service: CustumerService){}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() custumerDto: CustumerDto) {
        const custume = plainToClass(Custumer, custumerDto);
        return this.service.save(custume);
    }
}
